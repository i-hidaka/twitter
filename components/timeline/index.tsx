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
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}
