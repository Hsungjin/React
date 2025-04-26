import classNames from "classnames/bind";
import styles from "./Heading.module.scss";

import { parseISO, format, getDay } from "date-fns";

import Section from "../shared/Section";

const cx = classNames.bind(styles);

const DAYS = [
    'SUNDAY - 일요일',
    'MONDAY - 월요일',
    'TUESDAY - 화요일',
    'WEDNESDAY - 수요일',
    'THURSDAY - 목요일',
    'FRIDAY - 금요일',
    'SATURDAY - 토요일',
]

function Heading({ date }: { date: string }) {
  const parsedDate = parseISO(date);
  const formattedDate = format(parsedDate, "yyyy.MM.dd");
  const dayOfWeek = DAYS[getDay(parsedDate)];

  return (
    <Section className={cx("container")}>
      <div className={cx("text-date")}>{formattedDate}</div>
      <div className={cx("text-day")}>{dayOfWeek}</div>
    </Section>
  );
}

export default Heading;
