import { useEffect, useRef, useState, type FormEvent } from 'react';
import type { Result, SearchContextType, CurrentForecastContextType, SliderContexType, DaysNavContexType } from './types/types';
import Context from './Context';
import Search from './components/Search';
import CurrentForecast from './components/CurrentForecast';
import Slider from './components/Slider';
import DaysNav from './components/DaysNav';

function App() {
	const [result, setResult] = useState<Result>();
	const [day, setDay] = useState<number>(0);
	const [fetchDay, setFetchDay] = useState<string>('3');
	const cityInputRef = useRef<HTMLInputElement>(null);

	const prevRef = useRef(null);
	const nextRef = useRef(null);

	const currentConsts = {
		currentDate: result?.location.localtime,
		currentCity: result?.location.name,
        currentCountry: result?.location.country,
        currentCondition: result?.forecast.forecastday[day].day.condition.text,
        currentTemp: result?.forecast.forecastday[day].day.avgtemp_c,
        currentTempMax: result?.forecast.forecastday[day].day.maxtemp_c,
        currentTempMin: result?.forecast.forecastday[day].day.mintemp_c,
        currentDewPoint: result?.current.dewpoint_c,
        currentWind: result?.forecast.forecastday[day].day.maxwind_kph,
	}

	async function ForecastCityFetch(city: string, day: string) {
		try {
			const response = await fetch(
				`http://api.weatherapi.com/v1/forecast.json?key=c1f1e863c1654398990210948250806&q=${city}&days=${day}&aqi=no&alerts=no`,
			);

			if (!response.ok) throw Error;

			const result = await response.json();

			if (result.error) throw Error;

			setResult(result);
			console.log(result);
		} catch (error) {
			alert('City are not found!');
		}
	}

	function formSubmit(e: FormEvent) {
		e.preventDefault();
		if (!cityInputRef.current) return
		if (cityInputRef.current.value === '') {
			alert('You have not filled in the input field!');
		} else {
			ForecastCityFetch(cityInputRef.current?.value, fetchDay);
			cityInputRef.current.value = '';
		}
	}

	useEffect(() => {
		async function InnitMountFetch() {
			try {
				const response = await fetch(
					`http://api.weatherapi.com/v1/forecast.json?key=c1f1e863c1654398990210948250806&q=Kyiv&days=3&aqi=no&alerts=no`,
				);
				if (!response.ok) throw Error;

				const result = await response.json();
				if (result.error) throw Error;

				setResult(result);
				console.log(result);
				console.log(response);
			} catch (error) {
				alert('Innitial mount error');
			}
		}

		InnitMountFetch()
	}, []);

	const search: SearchContextType = {
		cityInputRef,
		setFetchDay,
		formSubmit
	}

	const currentForecast: CurrentForecastContextType = {
		currentConsts
	}

	const slider: SliderContexType = {
		prevRef,
		nextRef,
		result,
		day
	}

	const days: DaysNavContexType = {
		result,
		day,
		setDay
	}

	return (
		<Context.Provider value={{ search, currentForecast, slider, days }}>
			<section className="w-full bg-main-bg px-5">
				<div className="max-w-370 mx-auto">
					<Search />
					<CurrentForecast />
					<DaysNav />
					<Slider />
					<div className="relative">
						<div ref={prevRef} className="swiper-button-prev absolute bottom-15 -left-1">
							<svg width="21" height="36" viewBox="0 0 21 36" fill="none" xmlns="http://www.w3.org/2000/svg">
								<rect x="-0.5" y="0.5" width="20" height="35" rx="7.5" transform="matrix(-1 0 0 1 20 0)" stroke="#A7A7A7" />
								<path d="M13.0344 10L14.4827 11.4545L6.51719 19.4545L5.06891 18L13.0344 10Z" fill="#606060" />
								<path d="M13.0344 26L14.4827 24.5455L6.51718 16.5455L5.06891 18L13.0344 26Z" fill="#606060" />
							</svg>
						</div>
						<div ref={nextRef} className="swiper-button-next absolute bottom-15 -right-1">
							<svg width="21" height="36" viewBox="0 0 21 36" fill="none" xmlns="http://www.w3.org/2000/svg">
								<rect x="0.5" y="0.5" width="20" height="35" rx="7.5" stroke="#A7A7A7" />
								<path d="M7.96558 10L6.5173 11.4545L14.4828 19.4545L15.9311 18L7.96558 10Z" fill="#606060" />
								<path d="M7.96558 26L6.5173 24.5455L14.4828 16.5455L15.9311 18L7.96558 26Z" fill="#606060" />
							</svg>
						</div>
					</div>
				</div>
			</section>
		</Context.Provider>
	);
}

export default App;
