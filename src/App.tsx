import Header from "./components/Header";
import Hero from "./components/Hero";
import QuickLinks from "./components/QuickLinks";
import PrincipalMessage from "./components/PrincipalMessage";
import AboutUs from "./components/AboutUs";
import SchoolEvents from "./components/SchoolEvents";
import NewsGrid from "./components/NewsGrid";
import AtAGlance from "./components/AtAGlance";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-full bg-[oklch(22.6%_.0495_264.23)]">
      <Header />
      <Hero />
      <QuickLinks className="bg-[oklch(22.6%_.0495_264.23)]" />
      <PrincipalMessage>
      </PrincipalMessage>
      <AboutUs />
      <SchoolEvents />
      <NewsGrid />
      <AtAGlance />
      <Footer />
    </div>
  );
}
