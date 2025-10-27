import { useContext } from 'react';
import Context from '../Context';
import ArrowUp from '../assets/temp-arrow-up.svg';
import ArrowDown from '../assets/temp-arrow-down.svg';
import Wind from '../assets/wind.svg';
import Droplet from '../assets/droplet.svg';
import SunnyFigure from '../assets/sunny-figure-main-section.svg';

export default function CurrentForecast() {
	const context = useContext(Context);

	if (!context) return;

	const { currentConsts } = context.currentForecast;

	function formatWeatherDate(localtime: string) {
		const date = new Date(localtime);
		const day = date.getDate();

		const suffix =
			day % 10 === 1 && day !== 11 ? 'st' : day % 10 === 2 && day !== 12 ? 'nd' : day % 10 === 3 && day !== 13 ? 'rd' : 'th';

		const month = date.toLocaleDateString('en-US', { month: 'long' });

		return `${month} ${day}${suffix}`;
	}

	return (
		<section className="flex items-center justify-between pl-28 bg-main-section rounded-[26px]">
			<div className="py-8">
				<time>{formatWeatherDate(currentConsts.currentDate)}</time>
				<h2 className="text-[40px] leading-none">{currentConsts.currentCity}</h2>
				<p className="text-[#b5b5b5]">{currentConsts.currentCountry}</p>
				<p className="text-[36px] bg-[linear-gradient(180deg,#541797_0%,#ff6a00_80%)] bg-clip-text text-transparent">
					{currentConsts.currentCondition}
				</p>
				<div className="flex flex-col gap-2.5">
					<div className="flex gap-4">
						<p className="flex items-center gap-3">
							<img src={ArrowUp} alt="" className="h-7 w-7" />
							{currentConsts.currentTempMax}°
						</p>
						<p className="flex items-center gap-3">
							<img src={ArrowDown} alt="" className="h-7 w-7" />
							{currentConsts.currentTempMin}°
						</p>
					</div>
					<p className="flex items-center gap-3">
						<img src={Wind} alt="" className="h-7 w-7" />
						{currentConsts.currentWind}km/h
					</p>
					<p className="flex items-center gap-3">
						<img src={Droplet} alt="" className="h-7 w-7" />
						{currentConsts.currentDewPoint}°
					</p>
				</div>
			</div>
			<figure className="relative">
				<figcaption className="absolute right-75 text-8xl">{currentConsts.currentTemp}°</figcaption>
				<img src={SunnyFigure} alt="Sunny" className="h-72 w-72" />
			</figure>
		</section>
	);
}
