import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <ThemeProvider defaultTheme="dark" storageKey="tuf-theme">
      <Header />
      <main className="px-16 mt-4">
        <Outlet />
      </main>
    </ThemeProvider>
  ),
});
