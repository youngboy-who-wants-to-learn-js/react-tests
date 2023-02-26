import { createReduxStore } from "../../store/store";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";

export const renderWithReduxStore = (component, initialState) => {
  const store = createReduxStore(initialState);
  return render(<Provider store={store}>{component}</Provider>);
};
