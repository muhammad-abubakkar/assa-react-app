import { createBrowserRouter } from "react-router-dom";
import Root from "./routes/root";
import Location from "./routes/location";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/locations",
    element: <Root />,
  },
  {
    path: "/locations/:locationId",
    element: <Location />,
  },
  {
    path: "/characters/:characterId",
    element: <Location />,
  },
]);
