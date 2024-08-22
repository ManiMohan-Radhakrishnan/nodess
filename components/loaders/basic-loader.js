import ContentLoader from "react-content-loader";
import style from "./style.module.scss";

const BasicLoader = ({ text = "" }) => {
  return (
    <>
      <ContentLoader
        height={140}
        speed={1}
        backgroundColor={"#333"}
        foregroundColor={"#999"}
        viewBox="0 0 380 270"
      >
        {/* Only SVG shapes */}

        <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
        <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
      </ContentLoader>
      ;
    </>
  );
};

export default BasicLoader;
