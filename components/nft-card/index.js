import Link from "next/link";
import Image from "next/image";

import style from "./style.module.scss";
import { useRouter } from "next/router";

const NFTCard = ({ nft }) => {
  const router = useRouter();

  const handlePurchaseClick = () => {
    const url = `/details/${nft?.saleId}`;
    router.push(url); // Navigates to the generated URL
  };

  return (
    <div
      className={`${style["more-card"]} ${style["more-card-new"]} `}
      onClick={handlePurchaseClick}
    >
      <Link legacyBehavior href={""}>
        <a>
          <div className={style["more-card-header"]}>
            <div className={style["icon"]}>
              <Image
                unoptimized={true}
                width="100"
                height="100"
                priority={true}
                loading="eager"
                placeholder={"blur"}
                blurDataURL={"/sample.gif"}
                alt="media_logo_check11"
                src={
                  "https://cdn.guardianlink.io/product-hotspot/images/rewardicon.png"
                }
                role="button"
              />
            </div>
            <div className={style["more-card-nft-name_wrapper"]}>
              <p className={style["more-card-nft-name"]}>{nft?.saleTitle}</p>
            </div>
          </div>
        </a>
      </Link>

      <div className={style["more-card-content"]}>
        <div className={style["content-card"]}>
          <ul>
            <li>
              <span>Price per Node</span>
              <span>{nft?.purchasePeriod?.salePrice} WETH</span>
            </li>
            <li>
              <span>Node for Sale</span>
              <span>{nft?.saleAmount} CARV Node</span>
            </li>
            <li>
              <span>Pay in</span>
              <span>
                <Image
                  unoptimized={true}
                  width="18"
                  height="18"
                  priority={true}
                  loading="eager"
                  placeholder={"blur"}
                  blurDataURL={"/sample.gif"}
                  alt="media_logo_check11"
                  src={nft?.paymentToken?.tokenImage}
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
              <span>24/3000 CARV Node sold</span>
              <span>25%</span>
            </div>
          </div>
        </div>
        <button className={style["theme-btn"]} onClick={handlePurchaseClick}>
          Purchase
        </button>
      </div>
    </div>
  );
};

export default NFTCard;
