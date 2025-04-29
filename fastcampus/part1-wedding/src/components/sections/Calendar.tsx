import classNames from "classnames/bind";
import styles from "./Calendar.module.scss";
import Section from "../shared/Section";
import { parseISO, format } from "date-fns";
import { ko } from "date-fns/locale";
import { memo } from "react";

import "react-day-picker/style.css";
import { DayPicker } from "react-day-picker";

const css = `
    .rdp-month_caption {
        display: none;
    }
    .rdp-day {
        cursor: default;
    }
    .rdp-chevron {
        display: none;
    }
    .rdp-day_button {
        border-radius: 50%;
    }
    .rdp-weekday,
    .rdp-day {
        color: #e67373;
        font-weight: bold;
        font-size: 20px;
    }

    .rdp-day.rdp-selected {
        background-color: #e67373;
        border-radius: 50%;
        color: white;
        font-weight: bold;
    }

    .rdp-day_button {
        border: 1px solid #e67373;
    }

    .rdp-day.rdp-selected .rdp-day_button {
        border: 1px solid #e67373;
    }
`;

const cx = classNames.bind(styles);

function Calendar({ date }: { date: string }) {
  const weddingDate = parseISO(date);

  return (
    <Section
      title={
        <div className={cx("wrap-header")}>
          <span className={cx("text-date")}>
            {format(weddingDate, "yyyy.MM.dd")}
          </span>
          <span className={cx("text-time")}>
            {format(weddingDate, "aaa h시 eeee", { locale: ko })}
          </span>
        </div>
      }
    >
      <div className={cx("wrap-calendar")}>
        <style>{css}</style>
        <DayPicker
          mode="single"
          locale={ko}
          month={weddingDate}
          selected={weddingDate}
          formatters={{ formatCaption: () => "" }}
        />
      </div>
    </Section>
  );
}

export default memo(Calendar);
