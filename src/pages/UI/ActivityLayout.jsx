import React from "react";
import { Outlet } from "react-router-dom";

const ActivityLayout = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default ActivityLayout;
