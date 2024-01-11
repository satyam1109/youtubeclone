import React from "react";
import { useSelector } from "react-redux";

export default function SmallSideBar() {
  const menuOpen = useSelector((store) => store.app.isSmallMenuOpen);

  return menuOpen && (
    <div>
      <div className="w-20 shadow-lg">
        <h1>Small Menu</h1>
      </div>
    </div>
  );
}
