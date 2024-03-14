import { createSlice } from "@reduxjs/toolkit";

const useSlice = createSlice({
	name: "StudentList",
	initialState: {
		StudentLists: [],
	},

	reducers: {
		getStudents: (state, action) => {
			state.StudentLists = action.payload.map((student) => {
				return {
					id: student._id,
					Firstname: student.Firstname,
					Lastname: student.Lastname,
					Course: student.Course,
				};
			});
		},
	},
});

export const { getStudents } = useSlice.actions;

export default useSlice.reducer;
