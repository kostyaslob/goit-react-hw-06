import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "contacts",
    initialState: {
        items: [
            {"id": "id-1", "name": "Rosie Simpson", "number": "459-12-56"},
            {"id": "id-2", "name": "Hermione Kline", "number": "443-89-12"},
        ]
    },
    reducers: {
        addContact: (state, action) => {
            state.items.push(action.payload);         
        },
        deleteContact: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        },
    }
})

export const { addContact, deleteContact } = slice.actions;
export default slice.reducer;