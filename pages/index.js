import { getMetaDetails } from "../utils/common";

import HeroBanner from "../components/hero-banner";
import RecentlySoldList from "../components/recently-sold-list";
import Header from "../components/header";
import RainbowKit from "./rainbowkit";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroBanner />
        <RecentlySoldList />
      </main>
    </>
  );
}
