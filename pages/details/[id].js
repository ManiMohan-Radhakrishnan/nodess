import { useState } from "react";
import _ from "lodash";

import NFTMedia from "../../components/nft-media";
import NFTBaseDetails from "../../components/nft-basic-details";
import NFTProperties from "../../components/nft-properties";
import Header from "../../components/header";

const Details = ({ nft, nftOwner = [] }) => {
  const [putOnSalePop, setPutOnSalePop] = useState(false);

  return (
    <>
      <Header />
      <section className="detail-page-content background-set">
        <div className="bid_section_wrapper">
          <div className="container-fluid">
            <div className="sec-title">
              <h1>Tier 10 -</h1>
            </div>
            <div className="row fit-to-height">
              <div className="col-12 col-lg-7">
                <NFTMedia
                // nft={nft}
                // title={nft?.name}
                // slug={nft?.slug}
                // isFav={nft?.is_user_fav}
                // statistics={nft?.core_statistics}
                />
              </div>

              <div className="col-12 col-lg-5">
                <NFTBaseDetails
                // nft={nft}
                // putOnSalePop={putOnSalePop}
                // setPutOnSalePop={setPutOnSalePop}
                // isQuantityAvailable={isQuantityAvailable}
                // ownerOrdersList={ownerOrdersList}
                // owners={nftOwner}
                />
              </div>
            </div>
            <div className="row fit-to-height">
              <div className="col-12 col-lg-6">
                <NFTProperties />
              </div>

              <div className="col-12 col-lg-6">
                <NFTProperties />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Details;
