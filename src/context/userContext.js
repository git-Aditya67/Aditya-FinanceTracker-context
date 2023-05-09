import React, { createContext } from "react";

export const UsersContext = createContext({
  userData: [],
  setUserData: () => {},
});
