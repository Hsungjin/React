import classNames from "classnames/bind";
import styles from "./ImageGallery.module.scss";
import Section from "../shared/Section";

import ImageViewer from "../ImageViewer";
import { useState } from "react";

import generateImageUrl from "../../utils/generateImageUrl";

const cx = classNames.bind(styles);

function ImageGallery({ images }: { images: string[] }) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const open = selectedIndex > -1;

  const handleSelectedImage = (index: number) => {
    setSelectedIndex(index);
  };

  const handleCloseImageViewer = () => {
    setSelectedIndex(-1);
  };

  return (
    <>
      <Section title="사진첩">
        <ul className={cx("wrap-images")}>
          {images.map((src, index) => (
            <li
              key={index}
              className={cx("wrap-image")}
              onClick={() => handleSelectedImage(index)}
            >
              <picture>
                <source srcSet={`${src}.webp`} type="image/webp" />
                <img alt="사진첩 이미지" src={`${src}.jpg`} />
              </picture>

              {/* <picture>
                <source srcSet={generateImageUrl({ filename: src, format: "webp", option: "w_400,h_400,q_auto,c_fill" })} type="image/webp" />
                <img alt="사진첩 이미지" src={generateImageUrl({ filename: src, format: "jpg", option: "w_400,h_400,q_auto,c_fill" })} />
              </picture> */}
            </li>
          ))}
        </ul>
      </Section>
      <ImageViewer
        images={images}
        open={open}
        selectedIndex={selectedIndex}
        onClose={handleCloseImageViewer}
      />
    </>
  );
}

export default ImageGallery;
