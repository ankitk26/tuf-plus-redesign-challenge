import Header from "@/components/Header";
import { ThemeProvider } from "@/components/theme-provider";
import { Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <ThemeProvider defaultTheme="dark" storageKey="tuf-theme">
      <Header />
      <main className="px-8 mt-4">
        <Outlet />
      </main>
    </ThemeProvider>
  ),
});
