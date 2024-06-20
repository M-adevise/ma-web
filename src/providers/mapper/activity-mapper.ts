import { v4 } from 'uuid';
import { Itinerary } from '../gen';

export const activityMapper = {
  toDomain(itinerary: Itinerary) {
    return {
      ...itinerary,
      id: v4(),
    };
  },
};
