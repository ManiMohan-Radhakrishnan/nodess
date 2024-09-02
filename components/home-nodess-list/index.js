import { useEffect, useState } from "react";
import NFTCard from "../nft-card";
import style from "./style.module.scss";
import { getNodessList } from "../../utils/base-methods";
import NFTCardLoader from "../loaders/nft-card-loader";

const HomeNodessList = () => {
  const [saleList, setSaleList] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [loadedIds, setLoadedIds] = useState(new Set());

  useEffect(() => {
    handleNftDetails(page);
  }, [page]);

  const handleNftDetails = async (page) => {
    if (loading) return;
    setLoading(true);
    try {
      const response = await getNodessList(page);
      const allSales = response?.data?.data[0]?.sales || [];

      // Filter out private sales and those already loaded
      const filteredSales = allSales.filter(
        (sale) => !sale.isPrivate && !loadedIds.has(sale.saleId)
      );

      if (filteredSales.length > 0) {
        setSaleList((prev) => {
          const uniqueSales = [
            ...prev,
            ...filteredSales.filter(
              (sale) => !prev.some((item) => item.saleId === sale.saleId)
            ),
          ];
          return uniqueSales;
        });

        setLoadedIds((prev) => {
          const newIds = new Set(prev);
          filteredSales.forEach((sale) => newIds.add(sale.saleId));
          return newIds;
        });

        setHasMore(filteredSales.length > 0);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error in fetching the NFT detail", error);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = () => {
    if (hasMore && !loading) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <>
      {!loading ? (
        <section className={style["explore-nft-section"]}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <div
                  className={`${style["sec-heading"]} d-flex align-items-center mb-5 ${style["explore-heading"]}`}
                >
                  <div className="col-md-8">
                    <h1 className="me-4 text-nowrap">Listed Node Sale</h1>
                    {/* <p className={style["sub-heading-p"]}>
                      Missed out on some of the nodes? Don’t worry! You can
                      still grab your favorite nodes in our Listed Nodes
                      section. Time is ticking—don’t miss your chance to own a
                      piece of history. Get yours now!
                    </p> */}
                  </div>
                </div>
                <div className="row">
                  {saleList?.map((nft) => (
                    <div
                      key={nft.saleId}
                      className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-4"
                    >
                      <NFTCard nft={nft} imageUrl={"/sample.gif"} />
                    </div>
                  ))}
                </div>
                {hasMore && (
                  <div className="text-center mt-4">
                    <button
                      className={`btn btn-primary ${style["theme-btn"]}`}
                      onClick={loadMore}
                      disabled={loading}
                    >
                      {loading ? "Loading..." : "Load More"}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      ) : (
        <>
          <NFTCardLoader />
        </>
      )}
    </>
  );
};

export default HomeNodessList;
