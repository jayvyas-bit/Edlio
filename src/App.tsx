import UtilityBar from "./components/UtilityBar";
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
    <div className="min-h-[4000%] bg-[#F5F1EA]">
      <UtilityBar />
      <Header />
      <Hero />
      <QuickLinks />
      <PrincipalMessage />
      <AboutUs />
      <SchoolEvents />
      <NewsGrid />
      <AtAGlance />
      <Footer />
    </div>
  );
}
