import HeroBanner from "../components/hero-banner";
import HomeNodessList from "../components/home-nodess-list";
import Header from "../components/header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroBanner />
        <HomeNodessList />
      </main>
    </>
  );
}
