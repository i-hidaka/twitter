import React, { useEffect, useState } from "react";
import style from "@/styles/timeline/Timeline.module.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from "@/firebase";
import { DocumentData, collection, getDocs } from "firebase/firestore";

type Post = {
  displayName: string;
  userName: string;
  verified: boolean;
  text: string;
  avatar: string;
  image: string;
};

export default function Timeline() {
  const [posts, setPosts] = useState<DocumentData>([]);
  useEffect(() => {
    const getPostData = async () => {
      const postData = collection(db, "posts");
      const querySnapShot = await getDocs(postData);
      setPosts(querySnapShot.docs.map((doc) => doc.data()));
    };
    getPostData();
  }, []);

  return (
    <div className={style.timeline}>
      {/* Header */}
      <div className={style.timeline_header}>
        <h2>ホーム</h2>
      </div>
      {/* TweetBox */}
      <TweetBox />
      {/* Post */}
      {posts.map((post: Post, i: number) => (
        <Post
          key={i}
          displayName={post.displayName}
          userName={post.userName}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
        />
      ))}
    </div>
  );
}
