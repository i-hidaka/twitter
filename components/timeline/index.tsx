import React from "react";
import style from "@/styles/timeline/Timeline.module.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
export default function Timeline() {
  return (
    <div className={style.timeline}>
      {/* Header */}
      <div className={style.timeline_header}>
        <h2>ホーム</h2>
      </div>
      {/* TweetBox */}
      <TweetBox />
      {/* Post */}
      <Post
        displayName="ユーザー"
        userName="user"
        verified={true}
        text="ツイート内容"
        avatar="http://shincode.info/wp-content/uploads/2021/12/icon.png"
        image="https://source.unsplash.com/random"
      />
    </div>
  );
}
