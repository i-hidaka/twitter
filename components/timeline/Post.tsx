import { Avatar } from "@mui/material";
import React from "react";
import style from "@/styles/timeline/Post.module.css";
import {
  ChatBubbleOutline,
  FavoriteBorder,
  PublishOutlined,
  Repeat,
  VerifiedUser,
} from "@mui/icons-material";
export default function Post() {
  return (
    <div className={style.post}>
      <div className={style.post_avatar}>
        <Avatar />
      </div>
      <div className={style.post_body}>
        <div className={style.post_header}>
          <div className={style.post_headerText}>
            <h3>
              ユーザー
              <span className={style.post_headerSpecial}>
                <VerifiedUser className={style.post_badge} />
                @user
              </span>
            </h3>
          </div>
          <div className={style.post_headerDescription}>
            <p>ツイート内容</p>
          </div>
        </div>
        <img src="https://source.unsplash.com/random" />
        <div className={style.post_footer}>
          <ChatBubbleOutline fontSize="small" />
          <Repeat fontSize="small" />
          <FavoriteBorder fontSize="small" />
          <PublishOutlined fontSize="small" />
        </div>
      </div>
    </div>
  );
}
