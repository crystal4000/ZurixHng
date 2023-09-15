import { useState } from "react";

export const useSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return {
    isSidebarOpen,
    toggleSidebar,
  };
};
