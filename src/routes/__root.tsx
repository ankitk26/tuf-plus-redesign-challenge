import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <ThemeProvider defaultTheme="dark" storageKey="tuf-theme">
      <Header />
      <main className="lg:px-16 px-4 mt-4">
        <Outlet />
      </main>
    </ThemeProvider>
  ),
});
