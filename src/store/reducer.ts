import { combineReducers } from "redux";
import { ThemeSlice } from "./slices/theme";
import { AppSlice } from "./slices/app";

const reducer = combineReducers({
  app: AppSlice.reducer,
  theme: ThemeSlice.reducer,
});

export default reducer;
