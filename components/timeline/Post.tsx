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
type Props = {
  displayName: string;
  userName: string;
  verified: boolean;
  text: string;
  avatar: string;
  image: string;
};

export default function Post({
  displayName,
  userName,
  verified,
  text,
  avatar,
  image,
}: Props) {
  return (
    <div className={style.post}>
      <div className={style.post_avatar}>
        <Avatar src={avatar} />
      </div>
      <div className={style.post_body}>
        <div className={style.post_header}>
          <div className={style.post_headerText}>
            <h3>
              {displayName}
              <span className={style.post_headerSpecial}>
                {verified ? <VerifiedUser className={style.post_badge} /> : ""}@
                {userName}
              </span>
            </h3>
          </div>
          <div className={style.post_headerDescription}>
            <p>{text}</p>
          </div>
        </div>
        <img src={image} />
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
