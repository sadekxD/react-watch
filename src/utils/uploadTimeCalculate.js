import { formatDistance, subDays } from "date-fns";

const getDifferenceInDays = (date1, date2) => {
	const diffInMs = Math.abs(date2 - date1);
	return diffInMs / (1000 * 60 * 60 * 24);
};

export const calculateDate = (date1, date2) => {
	const date = formatDistance(
		subDays(new Date(), getDifferenceInDays(date1, date2)),
		new Date(),
		{
			addSuffix: true,
		}
	);

	return date;
};
