import React, { useContext, useEffect } from "react";
import { Layout } from "./Layout";
import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "./Footer";
import { ThemeContext } from "../../Context/ThemeContext";

export const Navigation = () => {
  const { pathname } = useLocation();
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return (
    <div style={{
      backgroundColor: theme.background,
      color: theme.text
    }}>
      <Layout />
      <Outlet />
      <Footer />
    </div>
  );
};
