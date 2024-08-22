import _ from "lodash";

import style from "./style.module.scss";
import { FaCircleChevronRight } from "react-icons/fa6";
import dayjs from "dayjs";
import ToolTip from "../tooltip";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import Image from "next/image";

const NFTBaseDetails = ({ saleList }) => {
  return (
    <>
      <section className={style["verifier-info-block"]}>
        <div className={style["title-wrapper"]}>
          <p>
            {" "}
            Timezone: UTC{" "}
            {dayjs(saleList?.purchasePeriod?.startTime).format("A Z'")}
          </p>
          <p>
            Timeline updates{" "}
            <ToolTip
              icon={
                <BsFillQuestionCircleFill
                  color={"#a984fdcc"}
                  size={14}
                  className="mb-1 check-icon"
                />
              }
              content={
                <>
                  If the bid is not accepted before the shown time in the
                  countdown, the bid will expire. <br />
                  The <b>Funds on Hold</b> will be returned to the{" "}
                  <b>Available Funds</b> of the bidder&apos;s wallet.
                </>
              }
              placement="top"
            />
          </p>
        </div>
        <div className={style["verifier-info-wrapper"]}>
          <div className={style["purchase-info-wrapper"]}>
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
            <div className={style["title-wrapper"]}>
              <p> Purchased</p>
              Start
            </div>
            <div className={style["title-wrapper"]}>
              {dayjs(saleList?.purchasePeriod?.startTime).format(
                "MMMM D, YYYY"
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NFTBaseDetails;
