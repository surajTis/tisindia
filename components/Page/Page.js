import { BlockRenderer } from "components/BlockRenderer";
import { PageWrapper } from "context/page";
import Head from "next/head";
import { MainMenu } from "components/MainMenu";
import { Footer } from "components/Footer";
import GrowBusiness from "components/GrowBusiness/GrowBusiness";
import BestSeoCompany from "components/BestSeoCompany/BestSeoCompany";
export const Page = (props) => {
  console.log("PAGE PROPS: ", props);
  return (
    <PageWrapper
      value={{
        propertyFeatures: props.propertyFeatures,
        title: props.title,
        featuredImage: props.featuredImage,
      }}
    >
      <Head>
        <title>{props.seo.title}</title>
        <meta name="description" content={props.seo.metaDesc} />
        <script type="text/javascript" src="/js/jquery.min.js"></script>
        <script type="text/javascript" src="/js/main.js"></script>
      </Head>
      <MainMenu
        items={props.mainMenuItems}
        callToActionDestination={props.callToActionDestination}
        callToActionLabel={props.callToActionLabel}
      />
      <BlockRenderer blocks={props.blockContent} />
      <Footer items={props.footerMenuItems}/>
    </PageWrapper>
  );
};
