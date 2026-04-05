import type { Route } from "./+types/home";
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/main";
import Notification from "./components/Notification/notification";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dashboard" },
    { name: "description", content: "dashboard/react/css" },
  ];
}

export default function Home() {
  return (
    <main className="main-layout">
      <Sidebar />

      <Main />

      <Notification />
    </main>
  );
}
