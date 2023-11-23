import { gql } from "@apollo/client";
import client from "client";
import { mapMainMenuItems } from "./mapMainMenuItems";
export const getPageStaticProps = async (context) => {
  console.log("CONTEXT: ", context);
  const uri = context.params?.slug ? `/${context.params.slug.join("/")}/` : "/";

  const { data } = await client.query({
    query: gql`
      query PageQuery($uri: String!) {
        nodeByUri(uri: $uri) {
          ... on Page {
            id
            title
            seo {
              title
              metaDesc
            }
            mainContent {
              mainContent {
                ... on Page_Maincontent_MainContent_HomeBanner {
                  fieldGroupName
                  homeBannerContent {
                    homeBannerTitle
                    homeBannerSubtitle
                    homeBannerImage {
                      guid
                      altText
                    }
                    homeBannerContent
                  }
                }
                ... on Page_Maincontent_MainContent_CaseStudiesBlock {
                  fieldGroupName
                  caseStudiesBlockTitle
                  caseStudiesSlider {
                    caseStudySlideTitle
                    caseStudySlideContent
                    caseStudySlideImage {
                      altText
                      guid
                    }
                    caseStudySlideNavigationImage {
                      altText
                      guid
                    }
                  }
                }
                ... on Page_Maincontent_MainContent_ServicesBlock {
                  fieldGroupName
                  servicesBlockTitle
                  servicesBlockSubtitle
                  serviceBlocks {
                    serviceBlockTitle
                    serviceBlockSubtitle
                    serviceBlockContent
                    serviceBlockImage {
                      altText
                      guid
                    }
                    serviceBlockButtons {
                      serviceBlockButtonText
                      serviceBlockButtonLink
                    }
                  }
                }
                ... on Page_Maincontent_MainContent_SoftwareDevelopmentBlock {
                  fieldGroupName
                }
                ... on Page_Maincontent_MainContent_AwardsSection {
                  fieldGroupName
                }
                ... on Page_Maincontent_MainContent_AboutSection {
                  fieldGroupName
                }
                ... on Page_Maincontent_MainContent_BloginsightSection {
                  fieldGroupName
                }
              }
            }
          }
        }
        acfOptionsMainMenu {
          mainMenu {
            menuItems {
              items {
                label
                destination {
                  ... on Page {
                    uri
                  }
                }
              }
              subItemsMenu {
                slabel
                sdestination {
                  ... on Page {
                    uri
                  }
                }
              }
            }
          }
          footerMenu {
            footerSocialLinks {
              footerSocialLinks {
                socialLink
                socialImage {
                  sourceUrl
                }
                socialHoverImage {
                  sourceUrl
                }
              }
            }
            footerQuickLinks {
              footerQuickLinks {
                footerQuickLinkUrl
                footerQuickLinkText
                footerQuickLinkImage {
                  sourceUrl
                }
              }
            }
          }
        }
      }
    `,
    variables: {
      uri,
    },
  });
  return {
    props: {
      seo: data.nodeByUri.seo,
      title: data.nodeByUri.title,
      blockContent: data.nodeByUri.mainContent.mainContent,
      mainMenuItems: mapMainMenuItems(
        data.acfOptionsMainMenu.mainMenu.menuItems
      ),
      footerMenuItems: data.acfOptionsMainMenu.footerMenu,
    },
  };
};
