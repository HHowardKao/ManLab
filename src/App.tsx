import React from "react";
import { useRoutes } from "react-router-dom";
import Routes from "./routes";
const App: React.FC = () => {
  const element = useRoutes(Routes);
  return element;
};

export default App;
