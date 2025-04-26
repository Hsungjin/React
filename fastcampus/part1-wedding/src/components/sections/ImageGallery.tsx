import classNames from "classnames/bind";
import styles from "./ImageGallery.module.scss";
import Section from "../shared/Section";

import ImageViewer from "../ImageViewer";
import { useState } from "react";

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
            <li key={index} className={cx("wrap-image")}>
              <img
                src={src}
                alt="사진첩 이미지"
                onClick={() => handleSelectedImage(index)}
              />
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
