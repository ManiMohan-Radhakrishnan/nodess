import style from "./style.module.scss";

const NFTProperties = ({ saleList }) => {
  return (
    <>
      <div className="d-flex w-100">
        <ul className={`border rounded-4 p-0 w-100 ${style["border-cus-clr"]}`}>
          <li className="d-flex p-3 ">
            <h4>Pool Information</h4>
          </li>
          <li
            className={`d-flex justify-content-between align-items-center border-top p-3 ${style["border-cus-clr"]}`}
          >
            <span>Price per Node</span>
            <span>
              1 CARV Node = {saleList?.purchasePeriod?.salePrice}{" "}
              {saleList?.paymentToken?.tokenSymbol}
            </span>
          </li>
          <li
            className={`d-flex justify-content-between align-items-center border-top p-3 ${style["border-cus-clr"]}`}
          >
            <span>Accepted Currency</span>
            <span>{saleList?.paymentToken?.tokenSymbol}</span>
          </li>
          <li
            className={`d-flex justify-content-between align-items-center border-top p-3 ${style["border-cus-clr"]}`}
          >
            <span>Staking Cap</span>
            <span>-</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NFTProperties;
