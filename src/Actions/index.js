export const increment = (number) => {
	return {
		type: "Increment",
		payload: number
	};
};

export const decrement = (number) => {
	return {
		type: "Decrement",
		payload: number
	};
};