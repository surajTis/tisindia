
import { Banner } from "components/Banner";
import { CaseStudy } from "components/CaseStudy";
import { HomeService } from "components/HomeService";
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

      case "Page_Maincontent_MainContent_CaseStudiesBlock": {
        return (
          <CaseStudy
            key={i}
            caseStudyTitle={block.caseStudiesBlockTitle}
            caseStudySlider={block.caseStudiesSlider}
          />
        );
      }

      case "Page_Maincontent_MainContent_ServicesBlock": {
        return (
          <HomeService
            key={i}
            servicesBlockTitle={block.servicesBlockTitle}
            servicesBlockSubtitle={block.servicesBlockSubtitle}
            serviceBlocks={block.serviceBlocks}
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
