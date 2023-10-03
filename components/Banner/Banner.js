import parse from "html-react-parser";
import Image from "next/image";
export const Banner = ({ bannerTitle, bannerSubTitle, bannerImage }) => {
    console.log(bannerImage.uri)
  return (
    <>
      <div>
        <h1>{bannerTitle}</h1>
        <h3>{bannerSubTitle}</h3>
        <Image
          src={bannerImage.guid}
          alt={bannerImage.altText}
          width={500}
          height={500}
          // width={500} automatically provided
          // height={500} automatically provided
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
        />
      </div>
    </>
  );
};
