import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppFab from "./components/WhatsAppFab";
import { AuthProvider } from "./lib/auth";
import { LanguageProvider } from "./lib/language";
import Home from "./pages/Home";
import Buy from "./pages/Buy";
import Compare from "./pages/Compare";
import SearchResults from "./pages/SearchResults";
import CarDetail from "./pages/CarDetail";
import Sell from "./pages/Sell";
import Offers from "./pages/Offers";
import About from "./pages/About";
import Finance from "./pages/Finance";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Faq from "./pages/Faq";
import Login from "./pages/Login";
import Account from "./pages/Account";

export default function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/buy" element={<Buy />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/car/:id" element={<CarDetail />} />
            <Route path="/sell" element={<Sell />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/about" element={<About />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/login" element={<Login />} />
            <Route path="/account" element={<Account />} />
          </Routes>
          <WhatsAppFab />
        </BrowserRouter>
      </AuthProvider>
    </LanguageProvider>
  );
}
