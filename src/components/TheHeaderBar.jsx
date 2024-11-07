import { NavLink } from "react-router-dom";

const TheHeaderBar = () => {
  return (
    <nav className="bg-dark_27 max-w-[21.9em] sm:max-w-[27.3em] rounded-full sm:rounded-lg mx-auto flex justify-center items-center mb-10">
      <NavLink
        className="text-sm sm:text-lg text-dark_100 p-3 sm:px-5 sm:py-3 text-center"
        to={"/"}
      >
        Calculate percentage
      </NavLink>
      <NavLink
        className="text-sm text-dark_100 sm:text-lg p-3 sm:px-5 sm:py-3 text-center"
        to={"/calcTotal"}
      >
        Calculate total price
      </NavLink>
    </nav>
  );
};

export default TheHeaderBar;
