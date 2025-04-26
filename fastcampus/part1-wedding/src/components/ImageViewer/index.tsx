import classNames from "classnames/bind";
import styles from "./ImageViewer.module.scss";

// @ts-ignore
import "swiper/css";
// @ts-ignore
import "./swiper.css";
import { Swiper, SwiperSlide } from "swiper/react";

const cx = classNames.bind(styles);

function ImageViewer({
  images,
  open = false,
  selectedIndex,
  onClose,
}: {
  images: string[];
  open: boolean;
  selectedIndex: number;
  onClose: () => void;
}) {
  if (!open) return null;
  return (
    <div className={cx("dimmed")}>
      <CloseButton className={cx("icon-close")} onClose={onClose} />
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        initialSlide={selectedIndex}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt="이미지 뷰어" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

function CloseButton({ onClose, className }: { onClose: () => void; className: string }) {
  return (
    <svg
      className={className}
      onClick={onClose}
      height="512px"
      id="Layer_1"
      version="1.1"
      viewBox="0 0 512 512"
      width="512px"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <path d="M256,33C132.3,33,32,133.3,32,257c0,123.7,100.3,224,224,224c123.7,0,224-100.3,224-224C480,133.3,379.7,33,256,33z    M364.3,332.5c1.5,1.5,2.3,3.5,2.3,5.6c0,2.1-0.8,4.2-2.3,5.6l-21.6,21.7c-1.6,1.6-3.6,2.3-5.6,2.3c-2,0-4.1-0.8-5.6-2.3L256,289.8   l-75.4,75.7c-1.5,1.6-3.6,2.3-5.6,2.3c-2,0-4.1-0.8-5.6-2.3l-21.6-21.7c-1.5-1.5-2.3-3.5-2.3-5.6c0-2.1,0.8-4.2,2.3-5.6l75.7-76   l-75.9-75c-3.1-3.1-3.1-8.2,0-11.3l21.6-21.7c1.5-1.5,3.5-2.3,5.6-2.3c2.1,0,4.1,0.8,5.6,2.3l75.7,74.7l75.7-74.7   c1.5-1.5,3.5-2.3,5.6-2.3c2.1,0,4.1,0.8,5.6,2.3l21.6,21.7c3.1,3.1,3.1,8.2,0,11.3l-75.9,75L364.3,332.5z" />
      </g>
    </svg>
  );
}

export default ImageViewer;
