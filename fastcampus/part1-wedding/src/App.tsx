import classNames from "classnames/bind";
import styles from "./App.module.scss";
import { useEffect, useState } from "react";

import FullScreenMessage from "./components/shared/FullScreenMessage";
import Heading from "./components/sections/Heading";
import Video from "./components/sections/Video";

import { Wedding } from "./models/wedding";
import ImageGallery from "./components/sections/ImageGallery";
import Intro from "./components/sections/Intro";
import Invitation from "./components/sections/Invitation";
import Calendar from "./components/sections/Calendar";
import Map from "./components/sections/Map";
const cx = classNames.bind(styles);

function App() {
  const [wedding, setWedding] = useState<Wedding | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  // 1. wedding 데이터 호출
  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:8888/wedding")
      .then((res) => {
        if (!res.ok) {
          throw new Error("청첩장 정보를 불러오지 못했습니다.");
        }
        return res.json();
      })
      .then((data) => {
        setWedding(data);
      })
      .catch((err) => {
        console.error(err);
        setError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (wedding == null) {
    return null;
  }

  const {
    date,
    galleryImages,
    groom,
    bride,
    location,
    message: { intro, invitation },
  } = wedding;

  if (isLoading) {
    return <FullScreenMessage type="loading" />;
  }

  if (error) {
    return <FullScreenMessage type="error" />;
  }

  return (
    <div className={cx("container")}>
      <Heading date={date} />
      <Video />
      <Intro
        groomName={groom.name}
        brideName={bride.name}
        locationName={location.name}
        date={date}
        message={intro}
      />
      <Invitation message={invitation} />
      <ImageGallery images={galleryImages} />
      <Calendar date={date} />
      <Map location={location} />
      {JSON.stringify(wedding)}
    </div>
  );
}

export default App;
