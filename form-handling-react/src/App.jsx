import "./App.css";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/FormikForm";
function App() {
  return (
    <>
      <h1>User Registration Using Controlled Element</h1>
      <RegistrationForm />
      <br></br>
      <h1>Userr Registration Using Formik</h1>
      <FormikForm />
    </>
  );
}

export default App;
