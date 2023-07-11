import React from "react";
import style from "@/styles/widgets/Widgets.module.css";
import { Search } from "@mui/icons-material";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

export default function widget() {
  return (
    <div className={style.widgets}>
      <div className={style.widgets_input}>
        <Search className={style.widgets_searchIcon} />
        <input placeholder="キーワード検索" type="text" />
      </div>
      <div className={style.widgets_widgetsContainer}>
        <h2>いまどうしてる？</h2>
        <TwitterTweetEmbed tweetId={"1475764828208009220"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="Shin_Engineer"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"http://twitter.com/Shin_Engineer"}
          options={{ text: "テキスト" }}
        />
      </div>
    </div>
  );
}
