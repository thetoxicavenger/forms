import React from "react";
import Field from "../Field";
import TextInput from "../TextInput";
import Label from "../Label";
import ValidationError from "../ValidationError";

const isEmail = (email) => true;

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  note: "",
};
const fields = Object.keys(initialValues);

const labels = {
  firstName: "First Name",
  lastName: "Last Name",
  email: "Email",
  note: "Note",
};

const initialVisited = {
  firstName: false,
  lastName: false,
  email: false,
  note: false,
};

const validate = (values) => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = "First name is required.";
  }

  if (!values.lastName) {
    errors.lastName = "Last name is required.";
  }

  if (!values.email) {
    errors.email = "Email address is required.";
  }

  if (!isEmail(values.email)) {
    errors.email = "Invalid email address.";
  }

  if (!values.note) {
    errors.note = "Note is required.";
  }

  return errors;
};

const CreateSubmission = ({ save }) => {
  const [values, setValues] = React.useState(initialValues);
  const [visited, setVisited] = React.useState(initialVisited);

  const onBlur = (e) => {
    const { name } = e.target;
    setVisited((prev) => ({
      ...prev,
      [name]: true,
    }));
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value.length);
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setValues(initialValues);
    setVisited(initialVisited);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    save((prev) => [...prev, values]);
    resetForm();
  };

  const errors = validate(values);
  const hasErrors = Object.values(errors).some((val) => !!val);

  return (
    <form noValidate onSubmit={onSubmit}>
      {fields.map((field) => {
        return (
          <Field key={field}>
            <div>
              <Label>{labels[field]}</Label>
            </div>
            <div>
              <TextInput
                name={field}
                value={values[field]}
                onChange={onChange}
                onBlur={onBlur}
              />
            </div>
            <div>
              <ValidationError>
                {visited[field] && errors[field]}
              </ValidationError>
            </div>
          </Field>
        );
      })}
      <Field>
        <button type="submit" disabled={hasErrors}>
          + Add User
        </button>
      </Field>
    </form>
  );
};

export default CreateSubmission;
