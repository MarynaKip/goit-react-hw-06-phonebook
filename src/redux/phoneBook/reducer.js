import { combineReducers } from "redux";
import types from "./types";

const initialState = {
  contacts: {
    items: [
      {
        id: null,
        name: null,
        number: null,
      },
    ],
    filter: "",
  },
};

const items = (state = initialState.contacts.items, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.SAVE:
      //   if (state.some((contact) => contact.name === payload.name)) {
      //     alert.show(`Contact is already in contscts.`);
      //     return;
      //   }
      return [...state, payload];

    case types.DELETE:
      return [...state.filter(({ id }) => payload !== id)];

    default:
      return state;
  }
};

const filter = (state = initialState.contacts.filter, action) => {
  const { payload } = action;
  switch (action.type) {
    case types.UPDATE_FILTER:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({ items, filter });
