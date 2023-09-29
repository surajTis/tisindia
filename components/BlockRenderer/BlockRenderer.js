import Image from "next/image";
import { Banner } from "components/Banner";
import { ContentBlock } from "components/ContentBlock";
import { ServiceBlock } from "components/ServiceBlock";
import { FaqBlock } from "components/FaqBlock";
import { WhyChooseBlock } from "components/WhyChooseBlock";
import { GrowBusiness } from "components/GrowBusiness";
import { BestSeoCompany } from "components/BestSeoCompany";
import { RecentResultsSlider } from "components/RecentResultsSlider";
import { TestimonialSlider } from "components/TestimonialSlider";
export const BlockRenderer = ({ blocks }) => {
  return blocks.map((block, i) => {

    switch (block.fieldGroupName) {
      case "Page_Maincontent_MainContent_HomeBanner": {
        return (
          <Banner
            key={i}
            bannerTitle={block.homeBannerContent.homeBannerTitle}
            bannerContent={block.homeBannerContent.homeBannerContent}
            bannerCta={block.homeBannerContent.homeBannerCta}
          />
        );
      }
      case "Page_Maincontent_MainContent_ContentBlock": {
        return (
          <ContentBlock
            key={i}
            ContentBlockTitle={block.contentBlockTitle}
            ContentBlockDescription={block.contentBlockDescription}
          />
        );
      }

      case "Page_Maincontent_MainContent_FaqBlock": {
        return (
          <FaqBlock
            key={i}
            FaqBlockTitle={block.faqBlockTitle}
            FaqBlocks={block.faqBlocks}
          />
        );
      }

      case "Page_Maincontent_MainContent_ServiceBlock": {
        return (
          <ServiceBlock
            key={i}
            ServiceBlockHeading={block.serviceBlockHeading}
            serviceBlocks={block.serviceBlocks}
          />
        );
      }

      case "Page_Maincontent_MainContent_WhyChooseBlock": {
        return (
          <WhyChooseBlock
            key={i}
            whyChooseLeftContent={block.whyChooseLeftContent}
            whyChooseRightImage={block.whyChooseRightImage}
            whyChooseBlocks={block.whyChooseBlocks}
          />
        );
      }

      case "Page_Maincontent_MainContent_GrowBusinessBlock": {
        return (
          <GrowBusiness
            key={i}
            growBusinessBlockHeading={block.growBusinessBlock.growBusinessBlockHeading}
            growBusinessBlocks={block.growBusinessBlock.growBusinessBlocks}
          />
        );
      }
      case "Page_Maincontent_MainContent_BestSeoCompanyBlock": {
        return (
          <BestSeoCompany
            key={i}
            bestSeoCompanyBlock={block.bestSeoCompanyBlock}
            bestSeoCompanyBlocksWithGrid={block.bestSeoCompanyBlocksWithGrid}
          />
        );
      }

      case "Page_Maincontent_MainContent_RecentResultsBlock": {
        return (
          <RecentResultsSlider
            key={i}
            recentResultsBlockTitle={block.recentResultsBlockTitle}
            recentResultsBlockSlider={block.recentResultsBlockSlider}
          />
        );
      }

      case "Page_Maincontent_MainContent_TestimonialBlock": {
        return (
          <TestimonialSlider
            key={i}
            testimonialBlockTitle={block.testimonialBlockTitle}
            testimonialBlockSlider={block.testimonialBlockSlider}
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
