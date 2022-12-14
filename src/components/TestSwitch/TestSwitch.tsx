import { options } from "@data";
import { TestProps, UserProps } from "@proptypes";
import { Link } from "react-router-dom";
import styles from "./TestSwitch.module.scss";

interface TestSwitchProps {
  user: UserProps;
  data: TestProps[];
}

export const TestSwitch = ({ user, data }: TestSwitchProps) => (
  <>
    {data.length ? (
      data.map((item) => {
        return (
          <div className={styles.user__infoBlock} key={item._id}>
            <img
              className={styles.user__infoImage}
              src={user.avatarUrl.url}
              alt="avatar"
            />
            <div className={styles.user__infoText}>
              {user.fullName} прошел(-ла) тест
              <Link to={`/tests/${item._id}`}>
                <b> «{item.title}».</b>
              </Link>
              на <b>{item.score[0].totalScore} %</b>
              <span className={styles.user__date}>
                {new Date(item.score[0].createdAt).toLocaleDateString(
                  "ru-RU",
                  options
                )}
              </span>
            </div>
          </div>
        );
      })
    ) : (
      <div className={styles.user__empty}>
        {user.fullName} пока не прошел ни один тест
      </div>
    )}
  </>
);
