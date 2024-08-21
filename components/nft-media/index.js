import style from "./style.module.scss";
import { FaCircleChevronRight } from "react-icons/fa6";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { MdOutlineDiscount } from "react-icons/md";
import { LiaExternalLinkAltSolid } from "react-icons/lia";

const NFTMedia = ({}) => {
  return (
    <section className={style["verifier-info-block"]}>
      <div className={style["verifier-info-wrapper"]}>
        <div className={style["purchase-info-wrapper"]}>
          <div className={style["title-wrapper"]}>
            <p>Total Purchased</p>
            <FaCircleChevronRight color="#fff" />
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
              <FaCircleChevronRight color="#fff" />
            </div>
            <div className={style["detail"]}>
              <h6>WETH</h6>
              <div className={style["node-detail"]}>
                <p>1 NODE = 0.4217 WETH</p>
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
            <span>0 WETH</span>
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
  );
};

export default NFTMedia;
