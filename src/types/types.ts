import type React from 'react';
import { type FormEvent } from 'react';

export type Condition = {
	text: string;
	icon: string;
	code: number;
};

export type ForecastDay = {
	day: {
		avgtemp_c: number;
		maxtemp_c: number;
		mintemp_c: number;
		maxwind_kph: number;
		hour: object[];
		condition: Condition;
	};
	date: string
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

export type SearchContextType = {
	cityInputRef: React.RefObject<HTMLInputElement | null>;
	setFetchDay: React.Dispatch<React.SetStateAction<string>>;
	formSubmit(e: FormEvent<Element>): void;
};

export type CurrentForecastContextType = {
	currentConsts: any;
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
	setDay: React.Dispatch<React.SetStateAction<number>>
};

export type GlobalContextType = {
	search: SearchContextType;
	currentForecast: CurrentForecastContextType;
	slider: SliderContexType
	days: DaysNavContexType
};
