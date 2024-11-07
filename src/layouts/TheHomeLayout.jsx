import { Outlet } from "react-router-dom";
import TheHeaderBar from "../components/TheHeaderBar";
import TheFooter from "../components/TheFooter";

const TheHomeLayout = () => {
  return (
    <div>
      <header className="px-2 sm:p-0">
        <TheHeaderBar />
      </header>
      <main className="h-[100dvh] flex flex-col">
        <Outlet />
      </main>
      <footer className="mt-auto">
        <TheFooter />
      </footer>
    </div>
  );
};

export default TheHomeLayout;
