import React, { useState } from "react";
import Profile from "../profile/Profile";
import s from "./intro.module.scss";

const Intro = () => {
  const [file, setFile] = useState("");
  const handleChange = (e) => {
    const data = e.target.files[0];
    setFile(data);
  };
  return (
    <>
      <input className={s.intro} type="file" onChange={handleChange} />
      <div className={s.intro_back}>
        <Profile/>
      </div>
      {file && (
        <div>
          {/* <span>{file.name}</span> */}
          <img className={s.intro_img} src={URL.createObjectURL(file)} />
        </div>
      )}
    </>
  );
};

export default Intro;
