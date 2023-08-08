import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import ReactDOM from "react-dom/client";
import "react-toastify/dist/ReactToastify.css";
import PageRoutes from "./routes";
import "./index.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: true,
      // refetchOnWindowFocus: true,
      refetchInterval: 10000,
      retry: 3,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <PageRoutes />
    <ToastContainer pauseOnFocusLoss={false} pauseOnHover={false} />
  </QueryClientProvider>,
);
