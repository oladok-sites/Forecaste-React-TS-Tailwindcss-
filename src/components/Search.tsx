import { useContext } from "react";
import Context from "../Context";

export default function Search() {
	const context = useContext(Context)

	if (!context) return

	const { cityInputRef, setFetchDay, formSubmit } = context.search

	return (
		<search className="font-inter flex justify-center gap-5 py-12 h-37">
			<div className="flex items-center relative w-full max-w-lg">
				<svg
					className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
						stroke="#7D7D7D"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path d="M21 21L16.65 16.65" stroke="#7D7D7D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
				<button
					className="absolute right-5 top-1/2 -translate-y-1/2"
					onClick={() => {
						cityInputRef.current.value = '';
					}}
				>
					<svg width="17" height="17" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M0 1.41422L1.41421 1.59813e-06L12.0208 10.6066L10.6066 12.0208L0 1.41422Z" fill="#A6A6A6" />
						<path d="M10.6067 0L12.0209 1.41421L1.4143 12.0208L8.77706e-05 10.6066L10.6067 0Z" fill="#A6A6A6" />
					</svg>
				</button>
				<input
					id="search-input"
					className="font-normal bg-black-elements element-border rounded-[26px] pl-12.5 w-full h-full"
					ref={cityInputRef}
					type="text"
					placeholder="Type a city name..."
				/>
			</div>
			<div className="relative">
				<select
					id="day-select"
					className="appearance-none font-normal text-[#848383] h-full bg-black-elements element-border rounded-[26px] px-8.5 pr-20 text-base focus:outline-none cursor-pointer"
					onChange={(event) => setFetchDay(event.target.value)}
				>
					<option value="1">Days: 1</option>
					<option value="2">Days: 2</option>
					<option value="3" selected>
						Days: 3
					</option>
				</select>

				<svg
					className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none"
					width="24"
					height="14"
					viewBox="0 0 24 14"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M0.75 2.25001L2.75 0.250008L13.75 11.25L11.75 13.25L0.75 2.25001Z" fill="#A6A6A6" />
					<path d="M23.25 2.75001L21.25 0.750008L10.25 11.75L12.25 13.75L23.25 2.75001Z" fill="#A6A6A6" />
				</svg>
			</div>
			<button
				className="h-13 leading-13 px-14 font-medium bg-[#474ed9] rounded-[26px]"
				onClick={(event) => {
					formSubmit(event);
				}}
			>
				Confirm
			</button>
		</search>
	);
}
