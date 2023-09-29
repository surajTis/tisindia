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
                ... on Page_Maincontent_MainContent_ContentBlock {
                  fieldGroupName
                  contentBlockDescription
                  contentBlockTitle
                }
                ... on Page_Maincontent_MainContent_HomeBanner {
                  fieldGroupName
                  homeBannerContent {
                    homeBannerTitle
                    homeBannerContent
                    homeBannerCta {
                      homeBannerCtaText
                      homeBannerCtaLink
                    }
                  }
                }
                ... on Page_Maincontent_MainContent_ServiceBlock {
                  fieldGroupName
                  serviceBlockHeading
                  serviceBlocks {
                    serviceBlockTitle
                    serviceBlockContent
                    serviceBlockImage {
                      sourceUrl
                    }
                  }
                }
                ... on Page_Maincontent_MainContent_WhyChooseBlock {
                  fieldGroupName
                  whyChooseLeftContent
                  whyChooseRightImage {
                    sourceUrl
                  }
                  whyChooseBlocks {
                    whyChooseBlockTitle
                    whyChooseBlockContent
                  }
                }
                ... on Page_Maincontent_MainContent_FaqBlock {
                  faqBlockTitle
                  fieldGroupName
                  faqBlocks {
                    faqQuestion
                    faqAnswer
                  }
                }
                ... on Page_Maincontent_MainContent_GrowBusinessBlock {
                  fieldGroupName
                  growBusinessBlock {
                    growBusinessBlockHeading
                    growBusinessBlocks {
                      growBusinessBlockTitle
                      growBusinessBlockContent
                      growBusinessBlockImage {
                        sourceUrl
                      }
                    }
                  }
                }
                ... on Page_Maincontent_MainContent_BestSeoCompanyBlock {
                  bestSeoCompanyBlock
                  fieldGroupName
                  bestSeoCompanyBlocksWithGrid {
                    bestSeoCompanyBlocksContent
                    bestSeoCompanyBlocksGrid
                  }
                }
                ... on Page_Maincontent_MainContent_RecentResultsBlock {
                  fieldGroupName
                  recentResultsBlockTitle
                  recentResultsBlockSlider {
                    recentResultsBlockSliderImage {
                      sourceUrl
                    }
                  }
                }
                ... on Page_Maincontent_MainContent_TestimonialBlock {
                  fieldGroupName
                  testimonialBlockTitle
                  testimonialBlockSlider {
                    testimonialBlockSliderContent
                    testimonialBlockSliderImage {
                      sourceUrl
                    }
                  }
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
}

