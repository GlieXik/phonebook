import { Outlet } from "react-router-dom";

import Bar from "./Components/Bar/Bar";
import { Suspense } from "react";
import { Box } from "@mui/material";

export const Layout = () => {
  return (
    <Box>
      <Bar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
