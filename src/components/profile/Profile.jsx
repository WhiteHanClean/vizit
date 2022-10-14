import React, { useState } from "react";
import s from "./profile.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { editUser, getUser } from "../../store/reducers";
import { useParams } from "react-router";

const Profile = () => {
  const { user } = useSelector(state => state.user)
  const { isAdmin } = useSelector(state => state.auth)
  const dispatch = useDispatch();
  const { id } = useParams();

  const handleChangeProfile = async (e) => {
    const data = e.target.files[0];
    await dispatch(editUser({id, data: { logo: data, token: user?.token }}))
    dispatch(getUser(id))
  };

  return (
    <div className={s.profile_block}>
      <input disabled={!isAdmin} className={s.profile} type="file" onChange={handleChangeProfile} />
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
