import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button } from "@mui/material";
import style from "@/styles/sidebar/Sidebar.module.css";

const options = [
  { text: "ホーム", Icon: HomeIcon },
  { text: "話題を検索", Icon: SearchIcon },
  { text: "通知", Icon: NotificationsNoneIcon },
  { text: "メッセージ", Icon: MailOutlineIcon },
  { text: "ブックマーク", Icon: BookmarkBorderIcon },
  { text: "リスト", Icon: ListAltIcon },
  { text: "プロフィール", Icon: PermIdentityIcon },
  { text: "もっと見る", Icon: MoreHorizIcon },
];

export default function Sidebar() {
  return (
    <div className={style.sidebar}>
      <TwitterIcon className={style.sidebar_twitter_icon} />

      {options.map(({ text, Icon }) => {
        return <SidebarOption key={text} text={text} Icon={Icon} />;
      })}

      <Button variant="outlined" className={style.sidebar_tweet}>
        ツイートする
      </Button>
    </div>
  );
}
