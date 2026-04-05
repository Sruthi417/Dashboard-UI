import type { Route } from "./+types/home";
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/main";
import Notification from "./components/Notification/notification";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dashboard" },
    { name: "description", content: "dashboard/react/css" },
  ];
}

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <main className="main-layout">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      <Main sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <Notification />
    </main>
  );
}
