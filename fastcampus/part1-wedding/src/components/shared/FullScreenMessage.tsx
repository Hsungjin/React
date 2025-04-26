import styles from "./FullScreenMessage.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface FullScreenMessageProps {
  type: "loading" | "error";
}

function FullScreenMessage({ type }: FullScreenMessageProps) {
  return (
    <div className={cx("container")}>
      {type === "loading" ? (
        <>
          <Heart />
          청첩장 정보를 불러오고 있어요.
        </>
      ) : (
        <>
          <Error />
          에러가 발생했어요 잠시 후 다시 시도해 주세요.
        </>
      )}
    </div>
  );
}

function Heart() {
  return (
    <svg
      className={cx("icon-heart")}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8.612,2.347L8,2.997l-0.612-0.65c-1.69-1.795-4.43-1.795-6.12,0c-1.69,1.795-1.69,4.706,0,6.502l0.612,0.65L8,16  l6.12-6.502l0.612-0.65c1.69-1.795,1.69-4.706,0-6.502C13.042,0.551,10.302,0.551,8.612,2.347z" />
    </svg>
  );
}

function Error() {
  return (
    <svg
      className={cx("icon-error")}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h48v48H0z" fill="none" />
      <path d="M24 4C12.96 4 4 12.95 4 24s8.96 20 20 20 20-8.95 20-20S35.04 4 24 4zm2 30h-4v-4h4v4zm0-8h-4V14h4v12z" />
    </svg>
  );
}

export default FullScreenMessage;
