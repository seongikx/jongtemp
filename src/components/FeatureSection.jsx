import React from "react";

export function FeatureSection({
  imageFirst,
  title,
  description,
  imageCredit,
  imageSrc,
}) {
  const ContentSection = () => (
    <div className="flex flex-col items-center self-stretch my-auto text-2xl text-black max-md:mt-10 max-md:max-w-full">
      <div className="text-6xl max-md:text-4xl">{title}</div>
      <div className="self-stretch mt-3 text-center max-md:max-w-full">
        {description}
      </div>
      <div className="mt-20 text-center max-md:mt-10">{imageCredit}</div>
    </div>
  );

  const ImageSection = () => (
    <img
      loading="lazy"
      src={imageSrc}
      className="object-contain grow w-full aspect-[1.08] max-md:mt-10 max-md:max-w-full"
      alt={`Feature illustration for ${title}`}
    />
  );

  return (
    <div className="flex gap-5 max-md:flex-col">
      {imageFirst ? (
        <>
          <div className="flex flex-col w-[58%] max-md:ml-0 max-md:w-full">
            <ImageSection />
          </div>
          <div className="flex flex-col ml-5 w-[42%] max-md:ml-0 max-md:w-full">
            <ContentSection />
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
            <ContentSection />
          </div>
          <div className="flex flex-col ml-5 w-[57%] max-md:ml-0 max-md:w-full">
            <ImageSection />
          </div>
        </>
      )}
    </div>
  );
}
