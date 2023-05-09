import React, { useState } from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { nameShow, surnameShow } from "./infoSlice";

const Home = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [genderError, setGenderError] = useState("");
  const dispatch = useDispatch();

  function switchForm(e) {
    e.preventDefault();
    if (!firstName || !lastName) {
      setFirstNameError(firstName ? "" : "*First Name is required");
      setLastNameError(lastName ? "" : "*Last Name is required");
    } else if (!gender) {
      setGenderError("*Please select a gender.");
    } else {
      navigate("/language", { state: { firstName, lastName } });
    }
  }

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
    setFirstNameError(e.target.value ? "" : "*First Name is required");
    dispatch(nameShow(e.target.value));
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
    setLastNameError(e.target.value ? "" : "*Last Name is required");
    dispatch(surnameShow(e.target.value));
  }

  function handleGenderChange(e) {
    setGender(e.target.value);
    setGenderError("");
  }

  return (
    <div>
      <form className="container" onSubmit={switchForm}>
        <h1>𝐋𝐨𝐠𝐢𝐧</h1>
        <div>
          <label>𝐅𝐢𝐫𝐬𝐭 𝐍𝐚𝐦𝐞 :-</label>
          <br />
          <input
            type="text"
            name="firstname"
            placeholder="First name..."
            autoComplete="off"
            value={firstName}
            onChange={handleFirstNameChange}
          />
          {firstNameError && <span className="error">{firstNameError}</span>}
        </div>

        <div>
          <label>𝐋𝐚𝐬𝐭 𝐍𝐚𝐦𝐞 :-</label>
          <br />
          <input
            type="text"
            name="lastname"
            placeholder="Last Name..."
            autoComplete="off"
            value={lastName}
            onChange={handleLastNameChange}
          />
          {lastNameError && <span className="error">{lastNameError}</span>}
        </div>
        <br />
        <div className="gender">
          <label>𝐆𝐞𝐧𝐝𝐞𝐫 :-</label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={gender === "male"}
            onChange={handleGenderChange}
          />
          𝐌𝐚𝐥𝐞
          <input
            type="radio"
            name="gender"
            value="female"
            checked={gender === "female"}
            onChange={handleGenderChange}
          />
          𝐅𝐞𝐦𝐚𝐥𝐞
        </div>
        {genderError && <span className="error">{genderError}</span>}
        <br />
        <button className="btn" type="submit">
          𝐒𝐮𝐛𝐦𝐢𝐭
        </button>
      </form>
    </div>
  );
};

export default Home;
