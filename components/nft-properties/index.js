import style from "./style.module.scss";

const NFTProperties = () => {
  return (
    <>
      <div className="d-flex w-100">
        <ul className={`border rounded-4 p-0 w-100 ${style["border-cus-clr"]}`}>
          <li className="d-flex p-3 ">
            <span>Pool Information</span>
          </li>
          <li
            className={`d-flex justify-content-between align-items-center border-top p-3 ${style["border-cus-clr"]}`}
          >
            <span>Price per Node</span>
            <span>1 CARV Node = 0.4217 WETH</span>
          </li>
          <li
            className={`d-flex justify-content-between align-items-center border-top p-3 ${style["border-cus-clr"]}`}
          >
            <span>Price per Node</span>
            <span>1 CARV Node = 0.4217 WETH</span>
          </li>
          <li
            className={`d-flex justify-content-between align-items-center border-top p-3 ${style["border-cus-clr"]}`}
          >
            <span>Price per Node</span>
            <span>1 CARV Node = 0.4217 WETH</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NFTProperties;
