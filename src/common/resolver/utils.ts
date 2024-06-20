import z from 'zod';

export const numberResolver = () =>
  z.custom(data => data && typeof data === 'string' && /[\d]/gi.test(data), { message: 'Invalid input, integer was expected.' }).transform(data => +(data as string));

const invalidDatePattern = /Invalid Date/;

const dateValidator = (dateInString: string) => {
  const dateInDate = new Date(dateInString);
  if (invalidDatePattern.test(dateInDate.toString())) {
    return false;
  }
  return true;
};

const dateInStringToDate = (date: string) => new Date(date);

export const customDateValidator = () => z.string().refine(dateValidator).transform(dateInStringToDate);
