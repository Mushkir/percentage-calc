import TheNavBar from "../components/TheNavBar";
import { Outlet } from "react-router-dom";

const TheGuestLayout = () => {
  return (
    <div>
      <TheNavBar />
      <Outlet />
    </div>
  );
};

export default TheGuestLayout;
