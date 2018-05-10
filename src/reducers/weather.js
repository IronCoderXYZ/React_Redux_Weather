import { FETCH_WEATHER } from '../actions';

const initialState = [];

// Update to ES6
export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
    case FETCH_WEATHER:
      return [...state, payload.data];
  }
}
