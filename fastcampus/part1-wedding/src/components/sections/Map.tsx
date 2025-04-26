import classNames from "classnames/bind";
import styles from "./Map.module.scss";

import Section from "../shared/Section";
import { useEffect, useRef } from "react";
import { Location } from "../../models/wedding";

const { kakao } = window;

const cx = classNames.bind(styles);

declare global {
  interface Window {
    kakao: any;
  }
}

function Map({ location }: { location: Location }) {
  const mapContainer = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${import.meta.env.VITE_KAKAO_APP_KEY}&autoload=false`;
    script.async = true;

    document.head.appendChild(script);
    script.onload = () => {
      new window.kakao.maps.load(() => {
        const position = new window.kakao.maps.LatLng(
          location.lat,
          location.lng
        );

        const options = {
          center: position,
          level: 3,
        };

        const map = new window.kakao.maps.Map(mapContainer.current, options);

        const marker = new window.kakao.maps.Marker({
          position,
        });
        marker.setMap(map);
      });
    };
  }, [location]);

  return (
    <Section
      title={
        <div className={cx("wrap-header")}>
          <span className={cx("text-title")}>오시는 길</span>
          <span className={cx("text-subtitle")}>{location.name}</span>
          <span className={cx("text-subtitle")}>{location.address}</span>
        </div>
      }
    >
      <div className={cx("wrap-map")}>
        <div className={cx("map")} ref={mapContainer}></div>
      </div>

      <div>
        <WayToCome label="버스" list={location.waytocome.bus} />
        <WayToCome label="지하철" list={location.waytocome.metro} />
      </div>
    </Section>
  );
}

function WayToCome({
  label,
  list,
}: {
  label: React.ReactNode;
  list: string[];
}) {
  return (
    <div className={cx("wrap-waytocome")}>
      <div className={cx("text-label")}>{label}</div>
      <ul className={cx("list-waytocome")}>
        {list.map((waytocome) => (
          <li>{waytocome}</li>
        ))}
      </ul>
    </div>
  );
}

export default Map;
