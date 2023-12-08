
import { Banner } from "components/Banner";
import { CaseStudy } from "components/CaseStudy";
import { HomeService } from "components/HomeService";
import { DevelopmentServices } from "components/DevelopmentServices";
import { Award } from "components/Award";
import { HomeAbout } from "components/HomeAbout/HomeAbout";
import { BlogInsight } from "components/BlogInsight";
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

      // case "Page_Maincontent_MainContent_CaseStudiesBlock": {
      //   return (
      //     <CaseStudy
      //       key={i}
      //       caseStudyTitle={block.caseStudiesBlockTitle}
      //       caseStudySlider={block.caseStudiesSlider}
      //     />
      //   );
      // }

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

      case "Page_Maincontent_MainContent_SoftwareDevelopmentBlock": {
        return (
          <DevelopmentServices />
        );
      }
      // case "Page_Maincontent_MainContent_AwardsSection": {
      //   return (
      //     <Award />
      //   );
      // }
      case "Page_Maincontent_MainContent_AboutSection": {
        return (
          <HomeAbout />
        );
      }
      case "Page_Maincontent_MainContent_BloginsightSection": {
        return (
          <BlogInsight />
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
