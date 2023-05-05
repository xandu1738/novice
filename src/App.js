import FormInput from "./components/FormInput";
import "./App.css";
import { useState } from "react";
import MyButton from "./components/MyButton";
import PageComponent from "./components/PageComponent";
function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "username",
    },
    {
      id: 2,
      name: "email",
      type: "text",
      placeholder: "email",
      label: "email",
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "password",
      label: "password",
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "confirm password",
      label: "confirm password",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <div className="app">
      <PageComponent
        link="https://i.imgur.com/MK3eW3Am.jpg"
        person="water bed"
        size="100"
      />
      <form onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <MyButton />
      </form>
    </div>
  );
}

export default App;
