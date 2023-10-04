import parse from "html-react-parser";
import Link from "next/link";
import Image from "next/image";
import Law from "../../public/assets/img/blog/lawfirm.png";
import Opticle from "../../public/assets/img/blog/opticle.png"

const Blog = [
  {
    src: Law,
    discription:
      "The Ultimate Guide to SEO for Attorneys and Law Firms in 2023",
  },
  {
    src: Opticle,
    discription:
      "Location Page SEO: Concept of Optimizing Local Pages for Search Engine Visibility",
  },
  
];
export const BlogInsight = ({ bannerTitle, bannerContent, bannerCta }) => {
  return (
    <>
      <section className="blog-insight-outer">
        <div className="container">
          <div className="bloginsight-content">
            <h2>Trends Which Matter In The Digital World</h2>
            <p>
              We pleased more than 1211+ companies in last 13+ years. You could
              be Next!
            </p>
          </div>
          <div className="bloginsight-inner">
            {(Blog || []).map((insight) => (
              <div key={insight.id} className="bloginsight">
                <Image src={insight.src} alt="Picture of the author" />
                  <div className="blog-insight-text-bx">
                    <h5>{insight.discription}</h5>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
