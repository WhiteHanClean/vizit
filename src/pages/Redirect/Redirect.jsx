import React from "react";
import { Input } from "antd";
import s from "./redirect.module.scss";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom"
const Redirect = () => {
  return (
    <div className={s.redirect}>
      <h2>Введите новые изменения</h2>
      <p>Название</p>
      <Input className={s.redirect_item} placeholder="Basic usage" />
      <p>Название</p>
      <Input className={s.redirect_item} placeholder="Basic usage" />
      <p>Название</p>
      <Input className={s.redirect_item} placeholder="Basic usage" />
      <p>Название</p>
      <Input className={s.redirect_item} placeholder="Basic usage" />
      <p>Название</p>
      <Input className={s.redirect_item} placeholder="Basic usage" />
      <p>Название</p>
      <Input className={s.redirect_item} placeholder="Basic usage" />
      <p>Название</p>
      <Input className={s.redirect_item} placeholder="Basic usage" />
      <p>Название</p>
      <Input className={s.redirect_item} placeholder="Basic usage" />
      <p>Название</p>
      <Input className={s.redirect_item} placeholder="Basic usage" />

      <div className={s.redirect_btn}>
        <Link to="/">
          <Button variant="primary">Назад</Button>{" "}
        </Link>
        <Button variant="primary">Сохранить</Button>{" "}
      </div>
    </div>
  );
};

export default Redirect;
