/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState, forwardRef } from "react";

import NFTCard from "../nft-card";
import images from "../../utils/images.json";
import style from "./style.module.scss";

import { getNodessList } from "../../utils/base-methods";

const RecentlySoldList = () => {
  const [saleList, setSaleList] = useState([]);
  console.log("🚀 ~ RecentlySoldList ~ saleList:", saleList);

  useEffect(() => {
    handleNftDetails();
  }, []);

  const handleNftDetails = async () => {
    console.log("Fetching NFT details...");
    try {
      const response = await getNodessList();
      const allSales = response?.data?.data[0]?.sales || [];
      const filteredSales = allSales.filter((sale) => sale.isPrivate === false);

      setSaleList(filteredSales);

      console.log("🚀 ~ handleNftDetails ~ filteredSales:", filteredSales);
    } catch (error) {
      console.error("Error in fetching the NFT detail", error);
    }
  };

  return (
    <>
      <section className={style["explore-nft-section"]}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div
                className={`${style["sec-heading"]} d-flex align-items-center mb-5 ${style["explore-heading"]}`}
              >
                <div className="col-md-8">
                  <h1 className="me-4 text-nowrap">NODESS SALE</h1>
                  <p className={style["sub-heading-p"]}>
                    Take a look at some of the super-cool cricket NFTs you
                    missed out on buying. But no worries you can still head to
                    the listed NFTs section and buy your favorite cricket NFT.
                    There is no time for waiting anymore go get it now!
                  </p>
                </div>
              </div>
              <div className="row">
                {saleList?.map((nft, i) => (
                  <>
                    <div
                      key={`list-nft-${i}`}
                      className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-4"
                    >
                      <NFTCard
                        nft={nft}
                        key={i}
                        imageUrl={"/sample.gif"}
                        recentSold
                      />
                    </div>
                    {/* {!loading && loadingMore && <RecentSoldLoader />} */}
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RecentlySoldList;
