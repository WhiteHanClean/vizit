import React, { useState } from "react";
import s from "./profile.module.scss";
import { useSelector } from "react-redux";

const Profile = () => {
  const { user } = useSelector(state => state.user)
  const [profile, setFileProfile] = useState("");

  const handleChangeProfile = (e) => {
    const data = e.target.files[0];
    setFileProfile(data);
  };

  return (
    <div className={s.profile_block}>
      <input disabled={!localStorage.getItem('token')} className={s.profile} type="file" onChange={handleChangeProfile} />
      {user?.logo && (
        <div>
          {/* <span>{file.name}</span> */}
          <img className={s.profile_img} src={`https://atlassoft.space/salam/public${user?.logo}`} />
        </div>
      )}
    </div>
  );
};

export default Profile;
