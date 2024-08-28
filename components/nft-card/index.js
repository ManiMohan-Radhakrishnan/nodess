import Link from "next/link";
import Image from "next/image";
import style from "./style.module.scss";
import { useRouter } from "next/router";
import CoinImage from "../../images/coin2.png";

const NFTCard = ({ nft }) => {
  const router = useRouter();

  const handlePurchaseClick = () => {
    const url = `/details/${nft?.saleId}`;
    router.push(url); // Navigates to the generated URL
  };

  return (
    <div className={`${style["nft-card"]}`} onClick={handlePurchaseClick}>
      <div className={style["top-box"]}>
        <div className={style["nft-tag"]}># AI</div>
        <div className={style["nft-header"]}>
          <Image
            src={CoinImage ? CoinImage : "/sample.gif"}
            alt="NFT Logo"
            width="80"
            height="80"
            className={style["nft-logo"]}
          />
        </div>
      </div>
      <div className={style["bottom-box"]}>
        <div className={style["nft-title"]}>{nft?.saleTitle}</div>
        <div className={style["nft-content"]}>
          <div className={style["more-card-content"]}>
            <div className={style["content-card"]}>
              <ul>
                <li>
                  <span>Price per Node</span>
                  <span>{nft?.purchasePeriod?.salePrice} WETH</span>
                </li>
                <li>
                  <span>Node for Sale</span>
                  <span>{nft?.saleAmount} Node</span>
                </li>
                <li>
                  <span>Pay in</span>
                  <span>
                    <Image
                      fetchpriority="high"
                      unoptimized={true}
                      width="18"
                      height="18"
                      priority={true}
                      loading="eager"
                      placeholder={"blur"}
                      blurDataURL={"/sample.gif"}
                      alt="media_logo_check11"
                      src={
                        nft?.paymentToken?.tokenImage
                          ? nft?.paymentToken?.tokenImage
                          : "/sample.gif"
                      }
                      role="button"
                    />
                    {nft?.paymentToken?.tokenSymbol}
                  </span>
                </li>
              </ul>
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
                  <span>
                    24/{nft?.saleAmount} {nft?.saleToken?.tokenName} sold
                  </span>
                  <span>25%</span>
                </div>
              </div>
            </div>
            <button
              className={style["theme-btn"]}
              onClick={handlePurchaseClick}
            >
              Purchase
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
