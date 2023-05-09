import React from "react";
import "./language.css";
import { useNavigate } from "react-router-dom";
import { languageChanger } from "./languageslice";
import { useDispatch } from "react-redux";

const Language = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleEnglishClick = () => {
    let eng = dispatch(languageChanger(true));
    console.log(eng);

    navigate("/quiz");
  };

  const handlehindiClick = () => {
    let hin = dispatch(languageChanger(false));
    console.log(hin);
    navigate("/quiz");
  };

  return (
    <div className="card">
      <h1>𝐒𝐞𝐥𝐞𝐜𝐭 𝐋𝐚𝐧𝐠𝐮𝐚𝐠𝐞</h1>
      <button onClick={handleEnglishClick}>𝐄𝐧𝐠𝐥𝐢𝐬𝐡</button>
      <button onClick={handlehindiClick}>𝐇𝐢𝐧𝐝𝐢</button>
    </div>
  );
};

export default Language;

// import React from "react";
// // import { useHistory } from "react-router-dom";
// import "./language.css";
// import { Navigate } from "react-router-dom";

// const Language = () => {
//   // const history = useHistory();

//   const handleEnglishClick = () => {
//     Navigate("/quiz");
//   };

//   return (
//     <div className="card">
//       <h1>Select language</h1>
//       <button onClick={handleEnglishClick} onSubmit={Language}>
//         English
//       </button>
//       <button>Hindi</button>
//     </div>
//   );
// };

// export default Language;
