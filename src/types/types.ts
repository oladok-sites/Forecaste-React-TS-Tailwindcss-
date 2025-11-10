import type React from 'react';
import { type FormEvent } from 'react';

export type Condition = {
	text: string;
	icon: string;
	code: number;
};

type Hour = {
	time: string;
	condition: Condition;
	dewpoint_c: number;
	temp_c: number;
};

export type ForecastDay = {
	day: {
		avgtemp_c: number;
		maxtemp_c: number;
		mintemp_c: number;
		maxwind_kph: number;
		condition: Condition;
	};
	date: string;
	hour: Hour[];
};

export type Result = {
	location: {
		localtime: string;
		name: string;
		country: string;
	};
	current: {
		condition: Condition;
		dewpoint_c: number;
		wind_kph: number;
		temp_c: number;
	};
	forecast: {
		forecastday: ForecastDay[];
	};
};

type ConstsType = {
	currentDate: string | undefined;
	currentCity: string | undefined;
	currentCountry: string | undefined;
	currentCondition: string | undefined;
	currentTemp: number | undefined;
	currentTempMax: number | undefined;
	currentTempMin: number | undefined;
	currentDewPoint: number | undefined;
	currentWind: number | undefined;
};

// type ConstsType = {
// 	currentDate: string,
// 	currentCity: string,
//     currentCountry: string,
//     currentCondition: string,
//     currentTemp: number,
//     currentTempMax: number,
//     currentTempMin: number,
//     currentDewPoint: number,
//     currentWind: number,
// }

export type SearchContextType = {
	cityInputRef: React.RefObject<HTMLInputElement | null>;
	setFetchDay: React.Dispatch<React.SetStateAction<string>>;
	formSubmit(e: FormEvent<Element>): void;
};

export type CurrentForecastContextType = {
	currentConsts: ConstsType;
	formatWeatherDate: (localtime: string, system: 'Day' | 'Month') => string | undefined;
};

export type SliderContexType = {
	prevRef: React.RefObject<null>;
	nextRef: React.RefObject<null>;
	result: Result | undefined;
	day: number;
};

export type DaysNavContexType = {
	result: Result | undefined;
	day: number;
	setDay: React.Dispatch<React.SetStateAction<number>>;
	formatWeatherDate: (localtime: string, system: 'Day' | 'Month') => string | undefined;
};

export type GlobalContextType = {
	search: SearchContextType;
	currentForecast: CurrentForecastContextType;
	slider: SliderContexType;
	days: DaysNavContexType;
};
