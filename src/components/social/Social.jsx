import React from "react";
import s from "./social.module.scss";
import {
  InstagramOutlined,
  ChromeOutlined,
  WhatsAppOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
import { Space } from "antd";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Social = () => {
  return (
    <div className={s.social}>
      <div className={s.social_mead}>
        <div className={s.social_item}>
          <Space>
            <InstagramOutlined />
          </Space>
        </div>
        <div className={s.social_item}>
          <Space>
            <WhatsAppOutlined />
          </Space>
        </div>
        <div className={s.social_item}>
          <Space>
            <FacebookOutlined />
          </Space>
        </div>
        <div className={s.social_item}>
          <Space>
            <ChromeOutlined />
          </Space>
        </div>
      </div>

      <div className={s.social_btn}>
        <div className="d-grid gap-2">
          <Button variant="primary" size="lg">
            <a href="">070943534534</a>
          </Button>
          <Link to="/redirect">
            <Button variant="secondary" size="lg">
              Редактировать
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Social;
