import { useState } from "react";
import { PopupItems } from "../../propTypes/popupProps";
import { Popup } from "../Popup";
import { ReactComponent as ArrowDownIcon } from "../../img/arrow-down.svg";
import styles from "./UserPanel.module.scss";
import { useAppDispatch } from "../../redux/hooks";
import { logout } from "../../redux/slices/auth/auth";

interface UserPanelProps {}

export const UserPanel = ({}: UserPanelProps) => {
  const [userState, setUserState] = useState(false);
  const dispath = useAppDispatch();

  const userSettings: PopupItems[] = [
    {
      name: "Добавить тест",
      link: "sadasd",
    },
    {
      name: "Выйти",
      link: "adada",
      onClickPopup() {
        dispath(logout());
      },
    },
  ];

  return (
    <div className={styles.user__panel} data-testid="UserPanel">
      <div className={styles.author} onClick={() => setUserState(!userState)}>
        <img
          src={"https://thumbs.gfycat.com/WealthyBelovedGreatdane-max-1mb.gif"}
          alt=""
          className={styles.author__avatar}
        />
        <ArrowDownIcon className={styles.user__panelArrow} width={10} />
      </div>
      <Popup active={userState} items={userSettings} />
    </div>
  );
};
