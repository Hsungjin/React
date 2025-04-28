import classNames from "classnames/bind";
import styles from "./Accordion.module.scss";
import { PropsWithChildren, useState } from "react";

const cx = classNames.bind(styles);

interface AccordionProps {
  label: string;
}

function Accordion({ label, children }: PropsWithChildren<AccordionProps>) {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={cx(["wrap-accordion", expanded ? "open" : ""])}>
      <div className={cx("wrap-header")} onClick={handleToggle}>
        <span>{label}</span>
        <IconArrowDown className={cx("icon-arrow-down")} />
      </div>
      <div className={cx("wrap-content")}>{children}</div>
    </div>
  );
}

function IconArrowDown({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 8L14 8V10L8 16L2 10V8H6V0L10 4.76995e-08V8Z"
        fill="#030708"
      />
    </svg>
  );
}

export default Accordion;
