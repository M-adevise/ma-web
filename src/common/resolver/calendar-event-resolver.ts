import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { CalendarEvent } from '../../pages/appointements';
import { customDateValidator } from './utils';

const invalidDatePattern = /Invalid Date/;

const validateDate = (dateInString: string) => {
  const dateInDate = new Date(dateInString);
  if (invalidDatePattern.test(dateInDate.toString())) {
    return false;
  }
  return true;
};

const calendarEventValidator = z.object({
  id: z.string(),
  start: customDateValidator(),
  end: customDateValidator(),
  summary: z.string().min(4),
});

const calendarEventResolver = zodResolver(calendarEventValidator);
type calendarEventFormType = z.infer<typeof calendarEventValidator>;
const defaultCalendarEventValue = {
  end: new Date(),
  start: new Date(),
  id: 'id',
  title: 'Event',
};

export const useCalendarEventForm = (defaultValue?: CalendarEvent) =>
  useForm<calendarEventFormType>({
    defaultValues: defaultValue || defaultCalendarEventValue,
    mode: 'onSubmit',
    resolver: calendarEventResolver,
  });
