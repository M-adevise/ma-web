export interface CalendarEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
}

export interface EditEventDialogProps {
  event: CalendarEvent;
  isOpen: boolean;
  close: () => void;
}

export interface EditEventDialogState {
  isOpen: boolean;
  event: CalendarEvent | null;
}
