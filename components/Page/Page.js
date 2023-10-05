import { BlockRenderer } from "components/BlockRenderer";
import { PageWrapper } from "context/page";
import Head from "next/head";
import { MainMenu } from "components/MainMenu";
import { Footer } from "components/Footer";
import { BlogInsight } from "components/BlogInsight";
import { HomeAbout } from "components/HomeAbout/HomeAbout";
import { HomeService } from "components/HomeService";
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
      </Head>
      <MainMenu
        items={props.mainMenuItems}
        callToActionDestination={props.callToActionDestination}
        callToActionLabel={props.callToActionLabel}
      />
      <BlockRenderer blocks={props.blockContent} />
      <HomeService />
      <HomeAbout />
      <BlogInsight />
      <Footer items={props.footerMenuItems}/>
    </PageWrapper>
  );
};
