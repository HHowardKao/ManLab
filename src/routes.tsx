import React from "react";
import { RouteObject } from "react-router-dom";
import Home from "./pages/home";
import Member from "./pages/member";
import Professor from "./pages/professor";
import Research from "./pages/research";
import Alumni from "./pages/alumni";
import Activity from "./pages/activity";
import Collaborator from "./pages/collaborator";
import Research1 from "./pages/research1";
const Routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/member",
    element: <Member />,
  },
  {
    path: "/professor",
    element: <Professor />,
  },
  {
    path: "/research",
    element: <Research />,
  },
  {
    path: "/project1",
    element: <Research1 />,
  },
  {
    path: "/alumni",
    element: <Alumni />,
  },
  {
    path: "/activity",
    element: <Activity />,
  },
  {
    path: "/collaborator",
    element: <Collaborator />,
  },
];

export default Routes;
