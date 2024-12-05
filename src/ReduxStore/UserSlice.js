import { createSlice } from "@reduxjs/toolkit";
import { setLocalStorage, getLocalStorage } from "../utils/LocalStorage";

const { employees, admin } = getLocalStorage();

const initialState = {
    employees: JSON.parse(localStorage.getItem("employees")) || [],
    admin: JSON.parse(localStorage.getItem("admin")) || []

};

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUser: (state, action) => {
            const user = action.payload;
            if (user.userRole === "admin") {
                state.admin.push(user);

            } else if (user.userRole === "employee") {
                state.employees.push(user);
            }
            localStorage.setItem("employees", JSON.stringify(state.employees));
            localStorage.setItem("admin", JSON.stringify(state.admin));
        },
        assignTask: (state, action) => {
            const { employeeName, task } = action.payload;

            const employee = state.employees.find(emp => emp.name == employeeName);

            if (employee) {
                employee.tasks = [task, ...(employee.tasks || [])];


                employee.taskStats = {
                    ...employee.taskStats,
                    new: (employee.taskStats?.new || 0) + 1,
                }
            }
            localStorage.setItem("employees", JSON.stringify(state.employees));
            console.log(employee)
        }
    },
});

export const { addUser, assignTask } = userSlice.actions;
export default userSlice.reducer;
