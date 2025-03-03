const { createSlice, nanoid, current } = require("@reduxjs/toolkit");

const initialState = {
  users: [],
  // users: JSON.parse(localStorage.getItem("users")),
};

const Slice = createSlice({
  name: "addUserSlice",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const { name, name2, bike } = action.payload;
      // console.log(action);

      const data = {
        id: nanoid(),
        name,
        name2,
        bike,
      };
      state.users.push(data);

      // localStorage.setItem("users", JSON.stringify(current(state.users)));

      console.log(current(state.users));
    },
    removeUser: (state, action) => {
      const data = state.users.filter((item) => {
        return item.id !== action.payload;
      });
      state.users = data;
    },
  },
});

export const { addUser, removeUser } = Slice.actions;

export default Slice.reducer;
