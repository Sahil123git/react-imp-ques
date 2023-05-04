import React, { useState } from "react";
import "./FormHeader.css";
const FormHeader = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [chk, setChk] = useState(1);
  const [error, setError] = useState(0);

  function isValidateForm() {
    const nameRegex = /^[a-zA-Z\s]*$/;
    const phoneRegex = /^[0-9]*$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const isNameValid = nameRegex.test(name);
    const isPhoneValid = phoneRegex.test(number);
    const isEmailValid = emailRegex.test(email);

    console.log(isNameValid, isEmailValid, isPhoneValid);

    return isNameValid && isPhoneValid && isEmailValid;
  }
  function Submitted(e) {
    e.preventDefault();
    setChk((prevVal) => !prevVal);
    if (!isValidateForm()) {
      setError(1);
    } else {
      setError(0);
    }
  }
  return (
    <div>
      <form onSubmit={Submitted} className={chk === 1 ? "show" : "hide"}>
        <label htmlFor="name">Name</label>
        <input
          name="name"
          id="name"
          type="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <label htmlFor="email">Email</label>
        <input
          name="email"
          id="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <br />
        <label htmlFor="number">Phone Number</label>
        <input
          type="tel"
          name="number"
          id="number"
          onChange={(e) => setNumber(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>

      {error ? (
        <h3>Please Enter your details correctly</h3>
      ) : (
        <div className={chk === 1 ? "hide" : "show"}>
          <h3>Form Submitted!!</h3>
          <h4>Name: {name}</h4>
          <h4>email: {email}</h4>
          <h4>Phone Num: {number}</h4>
        </div>
      )}
    </div>
  );
};

export default FormHeader;
