import { Doctor, Patient } from '../../providers';

export interface CalendarEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  organizer?: Doctor;
  participant?: Patient;
  roomId?: string;
}

export interface EditEventDialogProps {
  event: CalendarEvent;
  isOpen: boolean;
  close: () => void;
}

export interface CrupdateEventProps {
  event: CalendarEvent;
  onSave?: (event: CalendarEvent) => void;
}

export interface EditEventDialogState {
  isDialogOpen: boolean;
  isDrawerOpen: boolean;
  event: CalendarEvent | null;
}
