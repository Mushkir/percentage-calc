import { Outlet } from "react-router-dom";
import TheHeaderBar from "../components/TheHeaderBar";

const TheHomeLayout = () => {
  return (
    <div>
      <TheHeaderBar />
      <Outlet />
    </div>
  );
};

export default TheHomeLayout;
