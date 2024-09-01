import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

//Initalization

const FormikForm = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  //Validation of errors using Yup
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Form submitted:", values);
    setSubmitting(false);
  };
  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="form">
            <div>
              <label> UserName</label>
              <Field type="text" name="username" placeholder="Enter UserName" />
              <ErrorMessage
                name="username"
                component="div"
                style={{ color: "red" }}
              />
            </div>
            <div>
              <label> Email</label>
              <Field type="email" name="username" placeholder="Enter email" />
              <ErrorMessage
                name="email"
                component="div"
                style={{ color: "red" }}
              />
            </div>

            <div>
              <label> Password</label>
              <Field
                type="password"
                name="username"
                placeholder="Enter Userpassword"
              />
              <ErrorMessage
                name="password"
                component="div"
                style={{ color: "red" }}
              />
            </div>
            <button className="submit " type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
export default FormikForm;
