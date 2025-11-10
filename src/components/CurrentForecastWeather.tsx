import { useContext } from 'react';
import Context from '../Context';
import ArrowUp from '../assets/temp-arrow-up.svg';
import ArrowDown from '../assets/temp-arrow-down.svg';
import Wind from '../assets/wind.svg';
import Droplet from '../assets/droplet.svg';

export default function CurrentForecastWeather() {
	const context = useContext(Context);

	if (!context) return;

	const { currentConsts, formatWeatherDate } = context.currentForecast;
	const formattedDate = currentConsts.currentDate ? formatWeatherDate(currentConsts.currentDate, 'Month') : '';

	return (
		<div className="py-8">
			<time>{formattedDate}</time>
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
	);
}
