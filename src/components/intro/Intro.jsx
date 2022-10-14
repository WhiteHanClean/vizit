import React, { useEffect, useState } from "react";
import Profile from "../profile/Profile";
import s from "./intro.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { editUser, getUser } from "../../store/reducers";
import { useParams } from "react-router";

const Intro = () => {
  const { user } = useSelector(state => state.user)
  const { isAdmin } = useSelector(state => state.auth)
  const dispatch = useDispatch();
  const { id } = useParams();
  const handleChange = async (e) => {
    const data = e.target.files[0];
    await dispatch(editUser({id, data: { image: data, token: user?.token }}))
    dispatch(getUser(id))
  };
  return (
    <>
      <input disabled={!isAdmin} className={s.intro} type="file" onChange={handleChange} />
      <div className={s.intro_back}>
        <Profile/>
      </div>
      {user?.image && (
        <div>
          <img className={s.intro_img} src={`https://atlassoft.space/salam/public${user?.image}`} />
        </div>
      )}
    </>
  );
};

export default Intro;
