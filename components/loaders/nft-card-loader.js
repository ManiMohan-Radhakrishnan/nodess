import ContentLoader from "react-content-loader";

const NFTCardLoader = (props) => {
  return (
    <>
      <>
        <ContentLoader
          viewBox="0 6 2000 1700"
          speed={1}
          backgroundColor="#4d4a5f"
          foregroundColor="#212031"
          {...props}
        >
          <rect x="40" y="20" rx="20" ry="20" width="22%" height="500" />
          <rect x="26.50%" y="20" rx="20" ry="20" width="22%" height="500" />
          <rect x="51.25%" y="20" rx="20" ry="20" width="22%" height="500" />
          <rect x="76.25%" y="20" rx="20" ry="20" width="22%" height="500" />

          <rect x="40" y="555" rx="20" ry="20" width="22%" height="500" />
          <rect x="26.50%" y="555" rx="20" ry="20" width="22%" height="500" />
          <rect x="51.25%" y="555" rx="20" ry="20" width="22%" height="500" />
          <rect x="76.25%" y="555" rx="20" ry="20" width="22%" height="500" />

          <rect x="40" y="1095" rx="20" ry="20" width="22%" height="500" />
          <rect x="26.50%" y="1095" rx="20" ry="20" width="22%" height="500" />
          <rect x="51.25%" y="1095" rx="20" ry="20" width="22%" height="500" />
          <rect x="76.25%" y="1095" rx="20" ry="20" width="22%" height="500" />
        </ContentLoader>
      </>
    </>
  );
};

export default NFTCardLoader;
