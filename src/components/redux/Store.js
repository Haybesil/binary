import { createStore } from 'redux';

const initialState = {
  promoValue: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PROMO_VALUE':
      return { ...state, promoValue: action.payload };
    default:
      return state;
  }
};

export const store = createStore(reducer);
