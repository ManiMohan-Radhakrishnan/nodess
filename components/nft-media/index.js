import style from "./style.module.scss";
import { FaCircleChevronRight } from "react-icons/fa6";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { MdOutlineDiscount } from "react-icons/md";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";

const NFTMedia = ({ walletCollectionStatus, saleList, Balance }) => {
  console.log("🚀 ~ NFTMedia ~ Balance:", Balance);
  console.log(
    "🚀 ~ NFTMedia ~ walletCollectionStatus:",
    walletCollectionStatus
  );

  return (
    <>
      {walletCollectionStatus?.status === "connected" ? (
        <>
          <section className={style["verifier-info-block"]}>
            <div className={style["verifier-info-wrapper"]}>
              <div className={style["purchase-info-wrapper"]}>
                <div className={style["title-wrapper"]}>
                  <p>Total Purchased</p>
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
                </div>
                <div className={style["line"]}></div>
                <div className={style["progress-wrapper"]}>
                  <p>Remaining Node</p>
                  <div className={style["cus-progress-wrapper"]}>
                    <div
                      className={`progress ${style["cus-progress"]}`}
                      role="progressbar"
                      aria-label="Example 1px high"
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div
                        className={`progress-bar ${style["cus-progress-bar"]}`}
                        style={{ width: "25%" }}
                      ></div>
                    </div>
                    <div className={style["progress-text"]}>
                      <span>24/3000 CARV Node sold</span>
                      <span>25%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={style["count-wrapper"]}>
                <div className={style["detail-wrapper"]}>
                  <div className={style["icon"]}>
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
                  </div>
                  <div className={style["detail"]}>
                    <h6>WETH</h6>
                    <div className={style["node-detail"]}>
                      <p>
                        1 NODE = {saleList?.purchasePeriod?.salePrice}{" "}
                        {saleList?.paymentToken?.tokenSymbol}
                      </p>
                    </div>
                  </div>
                </div>
                <div className={style["max-count-wrapper"]}>
                  <FiMinusCircle color="#5e537f" />
                  <div className={style["count"]}>
                    <p>0</p>
                  </div>
                  <FiPlusCircle color="#5e537f" />
                  <span className={style["max-count-btn"]}>Max</span>
                </div>
              </div>
              <div className={style["info-wrapper"]}>
                <div className={style["info"]}>
                  <p>Your Balance</p>
                  <span>
                    {Balance?.formatted} {Balance?.symbol}
                  </span>
                </div>
                <div className={style["info"]}>
                  <p className={style["text-white"]}>Total Price</p>
                  <span className={style["text-blue"]}>0.8434 WETH</span>
                </div>
              </div>
              <div className={style["promo-code-wrapper"]}>
                <button>
                  Use promo code
                  <MdOutlineDiscount color="#fff" />
                </button>
              </div>
              <button className={style["btn-balance"]}>
                Insufficient WETH Balance
              </button>
              <a href="/" className={style["link"]}>
                Get more WETH or Wrap your ETH
                <LiaExternalLinkAltSolid color="#fff" />
              </a>
            </div>
          </section>
        </>
      ) : (
        <>
          <section className={style["verifier-info-block"]}>
            <div
              className={`${style["verifier-info-wrapper"]} ${style["disconnect"]}`}
            >
              <div className={style["disconnecting"]}>
                <div className="icon-lock">
                  <svg
                    width="100"
                    height="100"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M49.4617 7.31738C37.0571 7.31738 26.9531 17.4214 26.9531 29.826V52.668H41.9588V29.826C41.9588 25.6742 45.31 22.3231 49.4617 22.3231C53.6134 22.3231 56.9646 25.6742 56.9646 29.826V52.668H71.9703V29.826C71.9703 17.4214 61.8663 7.31738 49.4617 7.31738Z"
                      fill="url(#paint0_linear_7153_130387)"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M21.9531 65.1727V47.666H76.9741V65.1727C76.9741 80.3286 64.6195 92.6832 49.4636 92.6832C34.3077 92.6832 21.9531 80.3286 21.9531 65.1727ZM51.9646 72.2252C54.8658 71.175 56.9665 68.4241 56.9665 65.1727C56.9665 61.0209 53.6154 57.6698 49.4636 57.6698C45.3119 57.6698 41.9607 61.0209 41.9607 65.1727C41.9607 68.4241 44.0614 71.175 46.9627 72.2252V82.6793H51.9646V72.2252Z"
                      fill="#6361C9"
                    ></path>
                    <defs>
                      <linearGradient
                        id="paint0_linear_7153_130387"
                        x1="49.4617"
                        y1="7.31738"
                        x2="49.4617"
                        y2="73.9444"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#B6DCFF" stop-opacity="0.12"></stop>
                        <stop offset="1" stop-color="#66B6FF"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h3>Connect your wallet to participate.</h3>
                <ConnectButton />
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default NFTMedia;
