import React from "react";
import Field from "../Field";
import TextInput from "../TextInput";
import Label from "../Label";
import ValidationError from "../ValidationError";
import "./CreateSubmission.css";
import EmailValidator from "email-validator";

const validate = (values) => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = "First name is required.";
  }

  if (!values.lastName) {
    errors.lastName = "Last name is required.";
  }

  if (!EmailValidator.validate(values.email)) {
    errors.email = "Invalid email address.";
  }

  if (!values.email) {
    errors.email = "Email address is required.";
  }

  if (!values.note) {
    errors.note = "Note is required.";
  }

  return errors;
};

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

const CreateSubmission = ({ save }) => {
  const [values, setValues] = React.useState(initialValues);
  const [visited, setVisited] = React.useState(initialVisited);

  const firstNameInputRef = React.useRef(null);
  const focusFirstName = () => {
    firstNameInputRef.current.focus();
  };

  React.useEffect(() => {
    focusFirstName();
  }, []);

  const onBlur = (e) => {
    const { name } = e.target;
    setVisited((prev) => ({
      ...prev,
      [name]: true,
    }));
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setValues(initialValues);
    focusFirstName();
    setVisited(initialVisited);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    save({
      ...values,
      id: Math.random().toString(),
    });
    resetForm();
  };

  const errors = validate(values);
  const hasErrors = Object.values(errors).some((val) => !!val);

  return (
    <>
      <h1>Add Users</h1>
      <form noValidate onSubmit={onSubmit}>
        {fields.map((field) => {
          const hasError = visited[field] && !!errors[field];
          return (
            <Field key={field}>
              <div className="mb-5">
                <Label htmlFor={field}>{labels[field]}</Label>
              </div>
              <div>
                <TextInput
                  id={field}
                  name={field}
                  value={values[field]}
                  onChange={onChange}
                  // blur behavior on delete button click is not ideal
                  onBlur={onBlur}
                  error={hasError}
                  inputRef={field === "firstName" ? firstNameInputRef : null}
                />
              </div>
              <div>
                <ValidationError>{hasError && errors[field]}</ValidationError>
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
    </>
  );
};

export default CreateSubmission;
