import _ from "lodash";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Popover } from "react-bootstrap";

import { calculateTimeLeft } from "../../utils/common";

import { getHideMenuStatus } from "../../redux/reducers/user_reducer";
import style from "./style.module.scss";
import Link from "next/link";
import { FaCircleChevronRight } from "react-icons/fa6";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { MdOutlineDiscount } from "react-icons/md";
import { LiaExternalLinkAltSolid } from "react-icons/lia";

const NFTBaseDetails = ({
  nft,
  putOnSalePop,
  setPutOnSalePop,
  isQuantityAvailable,
  ownerOrdersList,
  owners,
  nftData,
}) => {
  const router = useRouter();
  const state = useSelector((state) => state.user);
  const hideMenus = useSelector(getHideMenuStatus);

  const { user } = state.data;

  const erc721 = nft?.nft_type === "erc721";
  const isOwner = _.has(nft, "owner_details");
  const availableQuantity = _.get(nft, "owner_details.available_quantity", 0);

  const { days, hours, minutes, seconds } = calculateTimeLeft(nft?.launch_time);

  const [enable, setEnable] = useState(false);

  // console.log(nft?.launch_time, "nft?.launch_time");
  // console.log(enable, "enable");

  var rem_text = "";

  if (days > 0) {
    rem_text += days + "d ";
  }
  if (hours > 0) {
    rem_text += hours + "h ";
  }
  if (minutes > 0) {
    rem_text += minutes + "m ";
  }
  // if (seconds > 0) {
  //   rem_text += seconds + "s ";
  // }

  return (
    <>
      <section className={style["verifier-info-block"]}>
        <div className={style["title-wrapper"]}>
          <p> Timezone: UTC +5:30</p>
          <p>Timeline updates</p>
        </div>
        <div className={style["verifier-info-wrapper"]}>
          <div className={style["purchase-info-wrapper"]}>
            <FaCircleChevronRight color="#fff" />
            <div className={style["title-wrapper"]}>
              <p> Purchased</p>
              Start
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
        </div>
      </section>
    </>
  );
};

export default NFTBaseDetails;
