import ContentLoader from "react-content-loader";

const NFTCardLoader = (props) => {
  return (
    <>
      <>
        <ContentLoader
          viewBox="0 6 2000 890"
          speed={1}
          backgroundColor="#4d4a5f"
          foregroundColor="#212031"
          {...props}
        >
          <rect x="5" y="5" rx="10" ry="10" width="25%" height="600" />
          <rect x="34.25%" y="5" rx="10" ry="10" width="25%" height="600" />
          <rect x="68.25%" y="5" rx="10" ry="10" width="25%" height="600" />
        </ContentLoader>
        <ContentLoader
          viewBox="0 6 2000 910"
          speed={1}
          backgroundColor="#4d4a5f"
          foregroundColor="#212031"
          {...props}
        >
          <rect x="5" y="5" rx="10" ry="10" width="25%" height="600" />
          <rect x="34.25%" y="5" rx="10" ry="10" width="25%" height="600" />
          <rect x="68.25%" y="5" rx="10" ry="10" width="25%" height="600" />
        </ContentLoader>
      </>
    </>
  );
};

export default NFTCardLoader;
