import React, { useEffect, useState } from "react";
import { Input, Tabs } from "antd";
import s from "./redirect.module.scss";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom"
import { EditUserTab } from "../../components/Tabs/editUserTab/EditUserTab";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { getUser } from "../../store/reducers";
import { TimesTab } from "../../components/Tabs/timesTab/TimesTab";
import { BooksTab } from "../../components/Tabs/booksTab/BooksTab";
const Redirect = () => {
  const { id } = useParams();
  const { user } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUser(id))
  }, [])

  if (!localStorage.getItem('token')) {
    navigate(-1)
  }

  return (
    <div className={s.redirect}>
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="User" key="1">
          <EditUserTab user={user} />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Set Time" key="2">
          <TimesTab />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Books" key="3">
          <BooksTab />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default Redirect;
