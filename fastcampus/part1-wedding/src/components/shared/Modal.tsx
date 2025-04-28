import classNames from "classnames/bind";
import styles from "./Modal.module.scss";
import Dimmend from "./Dimmend";

const cx = classNames.bind(styles);

interface ModalProps {
  open: boolean;
  title?: string;
  body: React.ReactNode;
  rightButtonLabel?: string;
  onRightButtonClick?: () => void;
  leftButtonLabel?: string;
  onLeftButtonClick?: () => void;
}

function Modal({
  open,
  title,
  body,
  leftButtonLabel = '닫기',
  rightButtonLabel = '확인',
  onLeftButtonClick,
  onRightButtonClick,
}: ModalProps) {
  if (open === false) {
    return null;
  }

  return (
    <Dimmend>
      <div className={cx("wrap-modal")}>
        <div className={cx("wrap-body")}>
          <div className={cx("wrap-content")}>
            {title == null ? null : (
              <div className={cx("text-title")}>{title}</div>
            )}
            {body}
          </div>
          <div className={cx("wrap-buttons")}>
            <button className={cx("button-left")} onClick={onLeftButtonClick}>{leftButtonLabel}</button>
            <button className={cx("button-right")} onClick={onRightButtonClick}>{rightButtonLabel}</button>
          </div>
        </div>
      </div>
    </Dimmend>
  );
}

export default Modal;
