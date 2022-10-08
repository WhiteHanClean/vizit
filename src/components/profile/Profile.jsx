import React, { useState } from "react";
import s from "./profile.module.scss";

const Profile = () => {
  const [profile, setFileProfile] = useState("");

  const handleChangeProfile = (e) => {
    const data = e.target.files[0];
    setFileProfile(data);
  };
  return (
    <div className={s.profile_block}>
      <input className={s.profile} type="file" onChange={handleChangeProfile} />
      {profile && (
        <div>
          {/* <span>{file.name}</span> */}
          <img className={s.profile_img} src={URL.createObjectURL(profile)} />
        </div>
      )}
    </div>
  );
};

export default Profile;
