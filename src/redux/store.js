import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  contacts: {
	items: [
        {"id": "id-1", "name": "Rosie Simpson", "number": "459-12-56"},
        {"id": "id-2", "name": "Hermione Kline", "number": "443-89-12"},
        ]
	},
  filters: {
		name: ""
	}
}

const rootReducer = (state = initialState, action) => {
    return state;
}

export const store = configureStore({
    reducer: rootReducer
});

