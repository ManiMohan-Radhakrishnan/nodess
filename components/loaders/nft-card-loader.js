import ContentLoader from "react-content-loader";

const NFTCardLoader = (props) => {
  return (
    <>
      <>
        <ContentLoader
          viewBox="0 6 2000 1900"
          speed={1}
          backgroundColor="#4d4a5f"
          foregroundColor="#212031"
          {...props}
        >
          <rect x="100" y="40" rx="20" ry="20" width="22%" height="50" />
          <rect x="100" y="120" rx="8" ry="8" width="55%" height="25" />
          <rect x="100" y="170" rx="8" ry="8" width="35%" height="25" />

          <rect x="100" y="290" rx="20" ry="20" width="20%" height="450" />
          <rect x="28.50%" y="290" rx="20" ry="20" width="20%" height="450" />
          <rect x="52.25%" y="290" rx="20" ry="20" width="20%" height="450" />
          <rect x="75.25%" y="290" rx="20" ry="20" width="20%" height="450" />

          <rect x="100" y="825" rx="20" ry="20" width="20%" height="450" />
          <rect x="28.50%" y="825" rx="20" ry="20" width="20%" height="450" />
          <rect x="52.25%" y="825" rx="20" ry="20" width="20%" height="450" />
          <rect x="75.25%" y="825" rx="20" ry="20" width="20%" height="450" />

          <rect x="100" y="1375" rx="20" ry="20" width="20%" height="450" />
          <rect x="28.50%" y="1375" rx="20" ry="20" width="20%" height="450" />
          <rect x="52.25%" y="1375" rx="20" ry="20" width="20%" height="450" />
          <rect x="75.25%" y="1375" rx="20" ry="20" width="20%" height="450" />
        </ContentLoader>
      </>
    </>
  );
};

export default NFTCardLoader;
