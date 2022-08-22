import { Swiper, SwiperSlide } from 'swiper/react';
import * as S from './styles';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from 'swiper';
import bg1 from '../../assets/bg-1.jpg';
import bg2 from '../../assets/bg-2.jpg';
export default function Head() {
  return (
    <S.Container>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"

      >
        <SwiperSlide>
          <img src={bg1} width="100%" height="30%" /></SwiperSlide>
        <SwiperSlide> <img src={bg2} width="100%" height="30%" /></SwiperSlide>

      </Swiper>

    </S.Container>
  )
}
