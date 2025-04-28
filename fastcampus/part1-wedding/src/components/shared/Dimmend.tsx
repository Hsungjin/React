import classNames from "classnames/bind";
import styles from "./Dimmend.module.scss";

const cx = classNames.bind(styles);

function Dimmend({ children }: { children: React.ReactNode }) {
  return <div className={cx("dimmed")}>{children}</div>;
}

export default Dimmend;
