import { createSlice } from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
    name: "toolkit",
    initialState: {
        feedbackIsOpen: false,
        detailsContent: {},
    },
    reducers: {
        setFeedbackIsOpen(state, action) {
            state.feedbackIsOpen = action.payload;
        },
        setDetailsContent(state, action) {
            state.detailsContent = action.payload;
        },
    },
});

export default toolkitSlice.reducer;
export const { setFeedbackIsOpen, setDetailsContent } = toolkitSlice.actions;
