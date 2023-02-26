import { MemoryRouter } from "react-router-dom";
import { AppRoutes } from "../../routes";
import React from "react";
import { render } from "@testing-library/react";
import { createReduxStore } from "../../store/store";
import { Provider } from "react-redux";

export const renderTestApp = (component, options) => {
  const store = createReduxStore(options?.initialState);

  return render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[options?.initialRoute ?? "/"]}>
        <AppRoutes />
        {component}
      </MemoryRouter>
    </Provider>
  );
};
