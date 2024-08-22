import { useEffect, useState } from "react";
import _ from "lodash";

import NFTMedia from "../../components/nft-media";
import NFTBaseDetails from "../../components/nft-basic-details";
import NFTProperties from "../../components/nft-properties";
import Header from "../../components/header";
import { getNodessList } from "../../utils/base-methods";
import { useRouter } from "next/router";
import { useAccount } from "wagmi";
import Image from "next/image";
import { getBalance } from "@wagmi/core";
import { config } from "../../utils/get-balance-config";
import NFTPropertiesTwo from "../../components/nft-properties-two";

const Details = () => {
  const router = useRouter();
  const { saleId } = router.query;

  const [saleList, setSaleList] = useState([]);
  const [balance, setBalance] = useState();

  const walletCollectionStatus = useAccount();

  const promise = getBalance(config, {
    address: walletCollectionStatus?.address,
  });

  promise
    .then((balance) => {
      setBalance(balance);
    })
    .catch((error) => {
      console.error(error);
    });
  useEffect(() => {
    if (saleId) {
      handleNftDetails(saleId);
    }
  }, [saleId]);

  const handleNftDetails = async (saleId) => {
    try {
      const response = await getNodessList(); // Replace with your actual API call
      const allSales = response?.data?.data[0]?.sales || [];

      // Filter sales by isPrivate = false and saleId matches the queried saleId
      const filteredSales = allSales.filter(
        (sale) => !sale.isPrivate && sale.saleId === parseInt(saleId, 10)
      );

      setSaleList(filteredSales[0]);
    } catch (error) {
      // console.error("Error in fetching the NFT details", error);
    }
  };

  // https://verifier.carv.io/images/icons/networks/42161.svg

  return (
    <>
      <Header />
      <section className="detail-page-content background-set">
        <div className="bid_section_wrapper">
          <div className="container-fluid">
            <div className="sec-title">
              {" "}
              <h1>
                {" "}
                <Image
                  unoptimized={true}
                  width="40"
                  height="40"
                  priority={true}
                  loading="eager"
                  placeholder={"blur"}
                  blurDataURL={"/sample.gif"}
                  alt="media_logo_check11"
                  src={saleList?.saleToken?.tokenImage}
                  role="button"
                />{" "}
                <Image
                  unoptimized={true}
                  width="40"
                  height="40"
                  priority={true}
                  loading="eager"
                  placeholder={"blur"}
                  blurDataURL={"/sample.gif"}
                  alt="media_logo_check11"
                  src={
                    "https://verifier.carv.io/images/icons/networks/42161.svg"
                  }
                  role="button"
                />
                {saleList?.saleTitle}
              </h1>
            </div>
            <div
              className={`row ${
                walletCollectionStatus?.status === "connected"
                  ? "fit-to-height"
                  : ""
              }`}
            >
              <div className="col-12 col-lg-7">
                <NFTMedia
                  saleList={saleList}
                  walletCollectionStatus={walletCollectionStatus}
                  Balance={balance}
                />
              </div>

              <div className="col-12 col-lg-5">
                <NFTBaseDetails saleList={saleList} />
              </div>
            </div>
            <div className="row fit-to-height">
              <div className="col-12 col-lg-6">
                <NFTProperties
                  saleList={saleList}
                  walletCollectionStatus={walletCollectionStatus}
                  Balance={balance}
                />
              </div>

              <div className="col-12 col-lg-6">
                <NFTPropertiesTwo
                  saleList={saleList}
                  walletCollectionStatus={walletCollectionStatus}
                  Balance={balance}
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
