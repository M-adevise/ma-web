import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { CalendarEvent } from '../../pages/appointements';
import { getCached } from '../../utils';
import { customDateValidator } from './utils';

const calendarEventValidator = z.object({
  id: z.string(),
  start: customDateValidator(),
  end: customDateValidator(),
  title: z.string().min(4),
  organizer: z.custom(() => true),
  participant: z.custom(data => !!data),
});

const calendarEventResolver = zodResolver(calendarEventValidator);
type calendarEventFormType = z.infer<typeof calendarEventValidator>;
const defaultCalendarEventValue: CalendarEvent = {
  end: new Date(),
  start: new Date(),
  id: 'id',
  title: 'Event',
  organizer: getCached.user(),
  participant: undefined,
};

export const useCalendarEventForm = (defaultValue?: CalendarEvent) =>
  useForm<calendarEventFormType>({
    defaultValues: defaultValue || defaultCalendarEventValue,
    mode: 'onSubmit',
    resolver: calendarEventResolver,
  });
