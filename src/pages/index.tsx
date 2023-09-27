import { lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

const MainPage = lazy(() => import("./Main"));
const TaskListPage = lazy(() => import("./task-list/"));

export const Routing = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/" element={<MainPage />} />
      <Route path="/tasks" element={<TaskListPage />} />
    </Routes>
  );
};
