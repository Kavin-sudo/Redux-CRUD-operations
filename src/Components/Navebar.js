import React from "react";
import { useSelector } from "react-redux";

export const Navebar = () => {
  const { tasksList } = useSelector((state) => state.tasks);
  return (
    <>
      <h1 className="text-center my-4 text-primary">
        Redux Toolkit Using CRUD operations
      </h1>
      <h1 className="text-center my-4 text-primary">Project Management</h1>
      <p className="text-center lead">{`currently ${tasksList.length} task(s) pendding`}</p>
    </>
  );
};
