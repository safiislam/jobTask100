import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import auth from "../../utils/firebase.config";

const initialState = {
  name: "",
  email: "",
  isLoading: true,
  isError: false,
  error: "",
};

export const createUser = createAsyncThunk(
  "userSlice/createUser",
  async ({ email, password, name }) => {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, {
      displayName: name,
    });
    console.log(data);
    return {
      email: data.user.email,
      name: data.user.displayName,
    };
  }
);
export const loginUser = createAsyncThunk(
  'userSlice/loginUseer',
  async({email,password})=>{
    const data = await signInWithEmailAndPassword(auth,email,password)
    return {
      email: data.user.email,
      name: data.user.displayName,
    }
  }
)
export const logOut = createAsyncThunk(
  'userSlice/logOut',
  async () =>{
    await signOut(auth)
  }
)

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.name = payload.name;
      state.email = payload.email
    },
    toggleLoading : (state , {payload}) =>{
      state.isLoading = payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        (state.isLoading = true),
          (state.number = ""),
          (state.name = ""),
          (state.isError = false);
        state.error = "";
      })
      .addCase(createUser.fulfilled, (state, { payload }) => {
        (state.isLoading = false),
          (state.number = payload.number),
          (state.name = payload.name),
          (state.isError = false);
        state.error = "";
      })
      .addCase(createUser.rejected, (state, action) => {
        (state.isLoading = true),
          (state.number = ""),
          (state.name = ""),
          (state.isError = true);
        state.error = action.error.message;
      });
  },
});

export const { setUser, toggleLoading } = userSlice.actions;
export default userSlice.reducer;