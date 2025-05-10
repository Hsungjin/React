import { getAdBanners } from '@/remote/adBanner';
import Flex from '@shared/Flex';
import Text from '@shared/Text';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { colors } from '@styles/colorPalette';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function AdBanners() {
  const { data, isLoading } = useQuery(['adBanners'], () => getAdBanners());

  if (data == null || isLoading) {
    return (
      <Conatiner>
        <Flex direction="column" css={bannerConatinerStyles}>
          <Text bold={true} typography="t5">
            &nbsp;
          </Text>
          <Text typography="t7">&nbsp;</Text>
        </Flex>
      </Conatiner>
    );
  }

  return (
    <Conatiner>
      <Swiper spaceBetween={8} slidesPerView={1} loop={false}>
        {data?.map((banners) => {
          return (
            <SwiperSlide key={banners.id}>
              <Link to={banners.link}>
                <Flex direction="column" css={bannerConatinerStyles}>
                  <Text bold={true} typography="t5">
                    {banners.title}
                  </Text>
                  <Text typography="t7">{banners.description}</Text>
                </Flex>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Conatiner>
  );
}

const Conatiner = styled.div`
  padding: 24px;
`;

const bannerConatinerStyles = css`
  background-color: ${colors.gray};
  padding: 16px;
  border-radius: 10px;
`;

export default AdBanners;
