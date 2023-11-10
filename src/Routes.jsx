import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Feed = React.lazy(() => import("pages/Feed"));
const Alljobs = React.lazy(() => import("pages/Alljobs"));
const Blogmanagement = React.lazy(() => import("pages/Blogmanagement"));
const Dashboard = React.lazy(() => import("pages/Dashboard"));
const Login = React.lazy(() => import("pages/Login"));
const Leaderboard = React.lazy(() => import("pages/Leaderboard"));
const AccountCreation = React.lazy(() => import("pages/AccountCreation"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/accountcreation" element={<AccountCreation />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/blogmanagement" element={<Blogmanagement />} />
          <Route path="/alljobs" element={<Alljobs />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
