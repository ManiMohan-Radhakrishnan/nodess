import _ from "lodash";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Popover } from "react-bootstrap";

import { calculateTimeLeft } from "../../utils/common";

import { getHideMenuStatus } from "../../redux/reducers/user_reducer";

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
      <div className={`creator mt-3 mb-3`}>
        <span
          className="link"
          // onClick={() => {
          //   if (
          //     nftData?.core_statistics?.role?.value?.toLowerCase() ===
          //       "batsman" ||
          //     nftData?.core_statistics?.role?.value?.toLowerCase() === "bowler"
          //   )
          //     return router.push(
          //       `/nft-marketplace/cricket-player-nfts/${nftData?.category_slug}`
          //     );
          //   if (nftData?.core_statistics?.role?.value?.toLowerCase() === "bat")
          //     return router.push(
          //       `/nft-marketplace/cricket-bat-nfts/${nftData?.category_slug}`
          //     );
          //   if (nftData?.core_statistics?.role?.value === "Shot")
          //     return router.push(
          //       `/nft-marketplace/cricket-shot-nfts/${nftData?.category_slug}`
          //     );
          //   if (nftData?.core_statistics?.role?.value === "Fusor")
          //     return router.push(
          //       `/nft-marketplace/cricket-fusor-nfts/${nftData?.category_slug}`
          //     );
          // }}
        >
          {nftData?.category_name}
        </span>{" "}
        | {nftData?.celebrity_name} Exclusive NFTs
      </div>
      <div className={"nft-title-container"}>
        <h1 className={"nft-title"}>{nftData?.name}</h1>
      </div>
      <div className={`text-secondary mt-1 mb-5 nft-desc`}>
        {nftData?.description && (
          <p>{nftData?.description}xxxfsfdfdfdfsdFSDVF</p>
        )}
      </div>
    </>
  );
};

export default NFTBaseDetails;
