import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// @ts-ignore
import 'swiper/css';
import Termometer from '../assets/temperature-article-img.svg';
import DropletIcon from '../assets/droplet-article-img.svg';
import { useContext } from 'react';
import Context from '../Context';

export default function Slider() {
	const context = useContext(Context)

	if (!context) return

	const { prevRef, nextRef, result, day } = context.slider

	return (
		<Swiper
			modules={[Navigation]}
			onBeforeInit={(swiper) => {
				// @ts-ignore
				swiper.params.navigation.prevEl = prevRef.current;
				// @ts-ignore
				swiper.params.navigation.nextEl = nextRef.current;
			}}
			navigation={{
				prevEl: prevRef.current,
				nextEl: nextRef.current,
			}}
			spaceBetween={20}
			slidesPerView={6}
			slidesPerGroup={6}
			grabCursor
			loop={true}
			className="max-w-356 text-black-text font-poppins font-semibold"
		>
			{result?.forecast.forecastday[day].hour.map((hour, index) => (
				<SwiperSlide
					key={index}
					className="min-w-55 py-6 pl-4 bg-[linear-gradient(180deg,#541797_0%,#ff6a00_48.56%)] element-border rounded-[16px]"
				>
					<time>{hour.time.slice(-5)}</time>
					<h3 className="text-[12px] leading-[200%]">{hour.condition.text}</h3>
					<div className="flex items-center gap-3 mb-1.5">
						<img src={Termometer} alt="" className="h-7 w-7" />
						{hour.temp_c}°
					</div>
					<div className="flex items-center gap-3">
						<img src={DropletIcon} alt="" className="h-7 w-7" />
						{hour.dewpoint_c}°
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
}
