import { useEffect, useState } from "react";
import _ from "lodash";

import NFTMedia from "../../components/nft-media";
import NFTBaseDetails from "../../components/nft-basic-details";
import NFTProperties from "../../components/nft-properties";
import Header from "../../components/header";
import { getNodessList } from "../../utils/base-methods";
import { useRouter } from "next/router";
import { useAccount, useConfig, useConnect, useSignMessage } from "wagmi";
import Image from "next/image";
import { getBalance } from "@wagmi/core";
// import { config } from "../../utils/get-balance-config";
import NFTPropertiesTwo from "../../components/nft-properties-two";
import {
  NFTLoader,
  WebViewLoader,
} from "../../components/nft-basic-details/content-loader";
import NFTSold from "../../components/nft-soldout";
import NFTSuccess from "../../components/nft-success";
import Footer from "../../components/footer";
import { toast } from "react-toastify";

const Details = () => {
  const router = useRouter();
  const { saleId } = router.query;

  const [saleList, setSaleList] = useState([]);
  const [balance, setBalance] = useState();

  const [loading, setLoading] = useState(false);

  const walletCollectionStatus = useAccount();

  const { signMessageAsync } = useSignMessage();
  const { connect, connectors } = useConnect();

  const [signature, setSignature] = useState(null);

  const [success, setSuccess] = useState(false);

  const [modalShow, setModalShow] = useState(false);

  const [soldOut, setSoldOut] = useState(false);

  const config = useConfig();

  useEffect(() => {
    if (config && walletCollectionStatus?.address) {
      getBalance(config, { address: walletCollectionStatus?.address })
        .then((balance) => {
          setBalance(balance);
        })
        .catch((error) => {
          console.error("Failed to fetch balance:", error);
        });
    }
  }, [config, walletCollectionStatus?.address]);

  useEffect(() => {
    if (saleId) {
      handleNftDetails(saleId);
    }
  }, [saleId]);

  const handleNftDetails = async (saleId) => {
    try {
      setLoading(true);

      const response = await getNodessList(); // Replace with your actual API call
      const allSales = response?.data?.data[0]?.sales || [];

      // Filter sales by isPrivate = false and saleId matches the queried saleId
      const filteredSales = allSales.filter(
        (sale) => !sale.isPrivate && sale.saleId === parseInt(saleId, 10)
      );

      setSaleList(filteredSales[0]);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      // console.error("Error in fetching the NFT details", error);
    }
  };

  const handleSignIn = async () => {
    if (!walletCollectionStatus?.isConnected) {
      connect({ connector: connectors[0] });
    }

    const message = "Sign this message to authenticate";
    try {
      const signature = await signMessageAsync({ message });
      console.log("🚀 ~ handleSignIn ~ signature:", signature);
      setSignature(signature);
      setSuccess(true);
      setModalShow(true);
      // toast.success("Node sale Successfully");
      // Set a timeout to clear the signature after 2 minutes
      setTimeout(() => {
        setModalShow(false);
        setSoldOut(true);

        console.log("Signature cleared after 2 minutes");
      }, 3000); // 120,000 milliseconds = 2 minutes
    } catch (error) {
      console.error("Error signing message:", error);
    }
  };

  // https://verifier.carv.io/images/icons/networks/42161.svg

  return (
    <>
      <Header />
      {!loading ? (
        <section className="detail-page-content background-set">
          <div className="bid_section_wrapper">
            <div className="container-fluid">
              <div className="sec-title">
                <div className="title">
                  <div className="icon">
                    <Image
                      fetchpriority="high"
                      unoptimized={true}
                      width="40"
                      height="40"
                      priority={true}
                      loading="eager"
                      placeholder={"blur"}
                      blurDataURL={"/sample.gif"}
                      alt="media_logo_check11"
                      src={
                        saleList?.saleToken?.tokenImage
                          ? saleList?.saleToken?.tokenImage
                          : "/sample.gif"
                      }
                      role="button"
                    />
                    <Image
                      fetchpriority="high"
                      unoptimized={true}
                      width="40"
                      height="40"
                      priority={true}
                      loading="eager"
                      placeholder={"blur"}
                      blurDataURL={"/sample.gif"}
                      alt="media_logo_check11"
                      className="small-icon"
                      src={
                        "https://cdn-icons-png.freepik.com/512/14446/14446222.png?uid=R160862078"
                      }
                      // "https://cdn-icons-png.freepik.com/512/14993/14993567.png"
                      role="button"
                    />
                  </div>

                  <h1>{saleList?.saleTitle}</h1>
                </div>
              </div>

              <div
                className={`row ${
                  walletCollectionStatus?.status === "connected" &&
                  !soldOut &&
                  !success
                    ? "fit-to-height"
                    : ""
                }`}
              >
                {!walletCollectionStatus?.isDisconnected &&
                !success &&
                !soldOut ? (
                  <div className="col-12 col-lg-7">
                    <NFTMedia
                      saleList={saleList}
                      walletCollectionStatus={walletCollectionStatus}
                      Balance={balance}
                      handleSignIn={handleSignIn}
                    />
                  </div>
                ) : success && !soldOut ? (
                  <>
                    {" "}
                    <div className="col-12 col-lg-7">
                      <NFTSuccess modalShow={modalShow} />
                    </div>
                  </>
                ) : soldOut ? (
                  <>
                    {" "}
                    {/* <div className="col-12 col-lg-7">
                      <NFTSold />
                    </div> */}
                    <div className="col-12 col-lg-7">
                      <NFTMedia
                        saleList={saleList}
                        walletCollectionStatus={walletCollectionStatus}
                        Balance={balance}
                        handleSignIn={handleSignIn}
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="col-12 col-lg-7">
                      <NFTMedia
                        saleList={saleList}
                        walletCollectionStatus={walletCollectionStatus}
                        Balance={balance}
                        handleSignIn={handleSignIn}
                      />
                    </div>
                  </>
                )}

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
      ) : (
        <>
          <NFTLoader />
        </>
      )}
      <Footer />
    </>
  );
};

export default Details;
