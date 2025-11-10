import { useContext } from 'react';
import Context from '../Context';
import type { ForecastDay } from '../types/types';

export default function DaysNav() {
	const context = useContext(Context);

	if (!context) return;

	const { result, day, setDay, formatWeatherDate } = context.days;

	return (
		<nav className="flex items-center justify-center gap-3 my-10">
			{!(result?.forecast.forecastday.length === 1) &&
				result?.forecast.forecastday.map((arrayDay: ForecastDay, index: number) => (
					<label key={index} className="group" onClick={() => setDay(index)}>
						<input type="radio" name="day" className="appearance-none" checked={day === index} />
						<span className="inline-block text-[14px] font-medium h-9.5 leading-9.5 px-7.5 bg-black-elements element-border rounded-[26px] button-shadow group-has-[input:checked]:bg-[#541797] group-has-[input:checked]:shadow-[0_0_8px_3px_rgb(255,98,0)]">
							{formatWeatherDate(arrayDay.date, 'Day')}
						</span>
					</label>
				))}
		</nav>
	);
}
