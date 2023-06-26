import { Outlet } from "react-router-dom";
import Navbar from "../components/header";

export default function Root() {
  return (
    <main>
      <Navbar />
      <Outlet />
    </main>
  );
}
