import { EMPLOYEES_FETCH_SUCCESS } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case EMPLOYEES_FETCH_SUCCESS:
      return { ...state, employees: payload };
    default:
      return state;
  }
};
