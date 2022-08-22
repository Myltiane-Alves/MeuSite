import * as S from './styles';

import "swiper/css";
import "swiper/css/pagination";
// import "./styles.css";
import JS from "../../assets/javascript.png";
import RE from "../../assets/reactjs.png";
import BD from "../../assets/bancodedados.png";
import NS from "../../assets/nj.png";
import HT from "../../assets/html.png";
import CS from "../../assets/css.png";
import SA from "../../assets/sass.png";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Skills() {
  return (
    <S.Container>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={JS} alt="JavasScript" /></SwiperSlide>
        <SwiperSlide><img src={RE} alt="React" /></SwiperSlide>
        <SwiperSlide><img src={BD} alt="Banco de dados" /></SwiperSlide>
        <SwiperSlide><img src={NS} alt="Node JS" /></SwiperSlide>
        <SwiperSlide><img src={HT} alt="HTML" /></SwiperSlide>
        <SwiperSlide><img src={CS} alt="CSS " /> 6</SwiperSlide>
        <SwiperSlide><img src={SA} alt="Sass" /></SwiperSlide>

      </Swiper>
    </S.Container>
  )
}
