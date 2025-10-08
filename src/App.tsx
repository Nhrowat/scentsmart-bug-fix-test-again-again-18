import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import ThisMonthsFragrance from "./pages/ThisMonthsFragrance";
import PersonalFavorites from "./pages/PersonalFavorites";
import JordiWishlist from "./pages/JordiWishlist";
import NotFound from "./pages/NotFound";

// Force rebuild to clear React cache
const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/this-months-fragrance" element={<ThisMonthsFragrance />} />
            <Route path="/personal-favorites" element={<PersonalFavorites />} />
            <Route path="/jordi-wishlist" element={<JordiWishlist />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
