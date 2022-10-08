import React from "react";
import s from "./social.module.scss";

const Social = () => {
  return (
    <div>
      <div className={s.social_mead}>
        <div className={s.social_item}>
          <InstagramOutlined />
        </div>
      </div>
    </div>
  );
};

export default Social;
