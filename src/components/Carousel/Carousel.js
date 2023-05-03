import { Swiper } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Carousel({
  children,
  pagination,
  slidesPerView = 1,
  navigation = false,
  spaceBetween = 0,
  loop = false,
  autoplay = '',
}) {
  return (
    <Swiper
      // install Swiper modules
      modules={[Autoplay, Navigation, Pagination]}
      slidesPerView={slidesPerView}
      navigation={navigation}
      pagination={pagination}
      spaceBetween={spaceBetween}
      loop={loop}
      autoplay={autoplay}
      className="mySwiper"
    >
      {children}
    </Swiper>
  );
}
export default Carousel;
