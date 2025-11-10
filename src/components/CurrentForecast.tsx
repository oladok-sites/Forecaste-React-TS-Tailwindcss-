import { useContext } from 'react';
import Context from '../Context';
import CurrentForecastWeather from './CurrentForecastWeather';
import SunnyFigure from '../assets/sunny-figure-main-section.svg';

export default function CurrentForecast() {
	const context = useContext(Context);

	if (!context) return;

	const { currentConsts } = context.currentForecast;

	return (
		<section className="flex items-center justify-between pl-28 bg-main-section rounded-[26px]">
			<CurrentForecastWeather />
			<figure className="relative">
				<figcaption className="absolute right-75 text-8xl">{currentConsts.currentTemp}°</figcaption>
				<img src={SunnyFigure} alt="Sunny" className="h-72 w-72" />
			</figure>
		</section>
	);
}
