
import { Banner } from "components/Banner";
export const BlockRenderer = ({ blocks }) => {
  return blocks.map((block, i) => {

    switch (block.fieldGroupName) {
      case "Page_Maincontent_MainContent_HomeBanner": {
        return (
          <Banner
            key={i}
            bannerTitle={block.homeBannerContent.homeBannerTitle}
            bannerSubTitle={block.homeBannerContent.homeBannerSubtitle}
            bannerImage={block.homeBannerContent.homeBannerImage}
            bannerContent={block.homeBannerContent.homeBannerContent}
          />
        );
      }

      default: {
        console.log("UNKNOWN: ", block);
        return null;
      }
    }
  }
  );
};
