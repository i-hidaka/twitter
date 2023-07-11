import { Avatar, Button } from "@mui/material";
import React from "react";
import style from "@/styles/timeline/TweetBox.module.css";

export default function TweetBox() {
  return (
    <div className={style.tweetBox}>
      <form>
        <div className={style.tweetBox_input}>
          <Avatar />
          <input placeholder="いまどうしてる？" type="text" />
        </div>
        <input
          className={style.tweetBox_imageInput}
          placeholder="画像のURLを入力してください"
          type="text"
        />
        <Button className={style.tweetBox_tweetButton}>ツイートする</Button>
      </form>
    </div>
  );
}
