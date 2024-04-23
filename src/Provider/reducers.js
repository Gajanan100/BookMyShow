import { UPDATE_BOOKING_DETAILS, UPDATE_MOVIES_DETAILS } from "./Actions";

export const initialValue = {
  movieDetails: null,
  ticketBooking: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_MOVIES_DETAILS:
      return { ...state, movieDetails: action?.payload };
    case UPDATE_BOOKING_DETAILS:
      return { ...state, ticketBooking: action?.payload };

    default:
      return state;
  }
};
