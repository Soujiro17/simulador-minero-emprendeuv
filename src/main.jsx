import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import ReactDOM from "react-dom/client";
import "react-toastify/dist/ReactToastify.css";
import PageRoutes from "./routes";
import "./index.css";
import StorageProvider from "./contexts/StorageContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <StorageProvider>
      <PageRoutes />
      <ToastContainer pauseOnFocusLoss={false} pauseOnHover={false} />
    </StorageProvider>
  </QueryClientProvider>,
);
