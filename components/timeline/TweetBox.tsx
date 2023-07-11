import { Avatar, Button } from "@mui/material";
import React, { useState } from "react";
import style from "@/styles/timeline/TweetBox.module.css";
import db from "@/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = () => {
    addDoc(collection(db, "posts"), {
      displayName: "ユーザー名",
      userName: "user",
      verified: true,
      text: tweetMessage,
      avatar: "http://shincode.info/wp-content/uploads/2021/12/icon.png",
      image: tweetImage,
      timestamp: serverTimestamp(),
    });
    setTweetMessage("");
    setTweetImage("");
  };
  return (
    <div className={style.tweetBox}>
      <form>
        <div className={style.tweetBox_input}>
          <Avatar />
          <input
            value={tweetMessage}
            placeholder="いまどうしてる？"
            type="text"
            onChange={(e) => {
              setTweetMessage(e.target.value);
            }}
          />
        </div>
        <input
          value={tweetImage}
          className={style.tweetBox_imageInput}
          placeholder="画像のURLを入力してください"
          type="text"
          onChange={(e) => {
            setTweetImage(e.target.value);
          }}
        />
        <Button className={style.tweetBox_tweetButton} onClick={sendTweet}>
          ツイートする
        </Button>
      </form>
    </div>
  );
}
