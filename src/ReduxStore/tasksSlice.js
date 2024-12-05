import { createSlice } from "@reduxjs/toolkit";

// Get data from localStorage or initialize with empty arrays
const initialState = {
    employees: JSON.parse(localStorage.getItem("employees")) || [],
};

// Helper function to update localStorage
const updateLocalStorage = (state) => {
    localStorage.setItem("employees", JSON.stringify(state.employees));
};

const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        markTaskAsCompleted: (state, action) => {
            const { employeeId, taskId } = action.payload;

            const employee = state.employees.find((emp) => emp.id === employeeId);
            if (employee) {
                const task = employee.tasks.find((t) => t.id === taskId);
                if (task) {
                    task.completed = true;
                    task.failed = false;
                }
            }
            updateLocalStorage(state); // Update local storage
        },
        markTaskAsFailed: (state, action) => {
            const { employeeId, taskId } = action.payload;

            const employee = state.employees.find((emp) => emp.id === employeeId);
            if (employee) {
                const task = employee.tasks.find((t) => t.id === taskId);
                if (task) {
                    task.completed = false;
                    task.failed = true;
                }
            }
            updateLocalStorage(state); // Update local storage
        }
    }
});

export const { markTaskAsCompleted, markTaskAsFailed } = tasksSlice.actions;
export default tasksSlice.reducer;
