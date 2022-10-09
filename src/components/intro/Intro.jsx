import React, { useEffect, useState } from "react";
import Profile from "../profile/Profile";
import s from "./intro.module.scss";
import { useSelector } from "react-redux";

const Intro = () => {
  const { user } = useSelector(state => state.user)
  const [file, setFile] = useState("");
  const handleChange = (e) => {
    const data = e.target.files[0];
    setFile(data);
  };
  console.log(`https://atlassoft.space/salam/public${user?.image}`)
  return (
    <>
      <input disabled={!localStorage.getItem('token')} className={s.intro} type="file" onChange={handleChange} />
      <div className={s.intro_back}>
        <Profile/>
      </div>
      {user?.image && (
        <div>
          {/* <span>{file.name}</span> */}
          <img className={s.intro_img} src={`https://atlassoft.space/salam/public${user?.image}`} />
        </div>
      )}
    </>
  );
};

export default Intro;
