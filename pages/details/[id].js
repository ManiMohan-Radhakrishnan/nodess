import { useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import _ from "lodash";

import NFTMedia from "../../components/nft-media";
import NFTBaseDetails from "../../components/nft-basic-details";

const Details = ({ nft, nftOwner = [] }) => {
  const [putOnSalePop, setPutOnSalePop] = useState(false);

  return (
    <>
      <section className="detail-page-content background-set">
        <div className="bid_section_wrapper">
          <div className="container-fluid">
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Details;
