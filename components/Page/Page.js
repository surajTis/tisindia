import { BlockRenderer } from "components/BlockRenderer";
import { CaseStudy } from "components/CaseStudy";
import { PageWrapper } from "context/page";
import Head from "next/head";
import { MainMenu } from "components/MainMenu";
import { Footer } from "components/Footer";
import { BlogInsight } from "components/BlogInsight";
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
      <CaseStudy />
      <BlogInsight />
      <Footer items={props.footerMenuItems}/>
    </PageWrapper>
  );
};
