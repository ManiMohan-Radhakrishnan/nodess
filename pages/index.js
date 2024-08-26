import HeroBanner from "../components/hero-banner";
import HomeNodessList from "../components/home-nodess-list";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroBanner />
        <HomeNodessList />
      </main>
      <Footer />
    </>
  );
}
