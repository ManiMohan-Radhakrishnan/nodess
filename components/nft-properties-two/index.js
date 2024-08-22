import style from "./style.module.scss";

const NFTPropertiesTwo = ({ saleList }) => {
  return (
    <>
      <div className="d-flex w-100">
        <ul className={`border rounded-4 p-0 w-100 ${style["border-cus-clr"]}`}>
          <li className="d-flex p-3 ">
            <h4>Node Info</h4>
          </li>
          <li
            className={`d-flex justify-content-between align-items-center border-top p-3 ${style["border-cus-clr"]}`}
          >
            <span>Node</span>
            <span>{saleList?.saleToken?.tokenName}</span>
          </li>
          <li
            className={`d-flex justify-content-between align-items-center border-top p-3 ${style["border-cus-clr"]}`}
          >
            <span>Node for Sale</span>
            <span>
              {saleList?.saleAmount} {saleList?.saleToken?.tokenName}
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NFTPropertiesTwo;
