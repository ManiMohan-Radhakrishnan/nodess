import { getMetaDetails } from "../utils/common";

import HeroBanner from "../components/hero-banner";
import RecentlySoldList from "../components/recently-sold-list";

export default function Home() {
  return (
    <>
      <main>
        <HeroBanner />
        <RecentlySoldList />
      </main>
    </>
  );
}
