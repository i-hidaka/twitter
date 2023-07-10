import React from "react";
import { SvgIconComponent } from "@mui/icons-material";
import style from "@/styles/sidebar/SidebarOption.module.css";
type Props = {
  text: string;
  Icon: SvgIconComponent;
};
export default function SidebarOption({ text, Icon }: Props) {
  return (
    <div className={style.sidebarOption}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}
