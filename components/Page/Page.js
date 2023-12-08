import { BlockRenderer } from "components/BlockRenderer";
import { PageWrapper } from "context/page";
import Head from "next/head";
import { MainMenu } from "components/MainMenu";
import { Footer } from "components/Footer";
import { HomeTestimonial } from "components/HomeTestimonial";
export const Page = (props) => {
  
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
      {/* <HomeTestimonial /> */}
      <Footer items={props.footerMenuItems}/>
    </PageWrapper>
  );
};