import * as React from "react";
import { NavigationBar } from "../components/NavigationBar";
import { FooterSection } from "../components/FooterSection";
import { FeatureSection } from "../components/FeatureSection";

import redhoodImage from "../images/redhood.png";
import shirtImage from "../images/shirt.png";

export function LandingPage() {
  const navigationItems = [
    { text: "Shirts", link: "#" },
    { text: "Jackets", link: "#" },
    { text: "Jeans", link: "#" },
    { text: "Bags", link: "#" },
  ];

  const footerSections = [
    {
      title: "종두의 파렴치한 쇼핑몰",
      links: ["브랜드 소개", "매장", "익스클루시브 서비스"],
    },
    {
      title: "고객 서비스",
      links: ["주문 배송 조회", "반품 신청", "배송 서비스", "FAQ", "고객 문의"],
    },
    {
      title: "제품 목록",
      links: ["셔츠, 남방", "자켓", "하의", "가방"],
    },
    {
      title: "소셜 미디어",
      links: ["Instagram", "Facebook", "Twitter", "Youtube"],
    },
  ];

  return (
    <div className="flex overflow-hidden flex-col pb-28 bg-white max-md:pb-24">
      <div className="flex overflow-hidden flex-wrap gap-5 justify-between px-10 py-5 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="text-2xl text-black">종두의 파렴치한 쇼핑몰</div>
        <NavigationBar />
      </div>

      <div className="flex flex-col self-center mt-40 max-w-full text-2xl text-black w-[871px] max-md:mt-10">
        <div className="self-start ml-8 max-md:ml-2.5">
          입는 순간 일상이 되니까
        </div>
        <div className="text-8xl max-md:max-w-full max-md:text-4xl">
          <span className="text-7xl">일상을</span> Design{" "}
          <span className="text-7xl">하다</span>
        </div>
        <div className="flex flex-wrap gap-5 justify-between self-center mt-5 max-w-full whitespace-nowrap w-[544px]">
          {navigationItems.map((item, index) => (
            <div key={index}>{item.text}</div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center px-12 mt-44 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="self-start w-full max-w-[1259px] max-md:max-w-full">
          <FeatureSection
            imageFirst={true}
            title="SIMPLE"
            description={
              <>
                저희는 '심플한' 디자인으로 당신에게 다가갑니다.
                <br />
                최소한의 색과 포인트로 아름다움을 만듭니다.
              </>
            }
            imageCredit={
              <>
                왼쪽 사진의 출처는 아래와 같습니다.
                <br />
                <span className="text-xl">작가 rawpixel.com, 출처 Freepik</span>
              </>
            }
            imageSrc={redhoodImage} // import된 이미지 사용
          />
        </div>

        <div className="self-end w-full max-w-[1274px] max-md:max-w-full">
          <FeatureSection
            imageFirst={false}
            title="UNIQUE"
            description={
              <>
                저희는 '개성있는' 디자인으로 당신에게 다가갑니다.
                <br />
                아름답고 강렬한 포인트로 당신의 시선을 <br />
                사로잡을 것입니다.
              </>
            }
            imageCredit={
              <>
                오른쪽 사진의 출처는 아래와 같습니다.
                <br />
                <span className="text-xl">작가 rawpixel.com, 출처 Freepik</span>
              </>
            }
            imageSrc={shirtImage} // import된 이미지 사용
          />
        </div>

        <div className="mt-44 text-2xl text-black max-md:mt-10">
          당신의 일상을 선택하세요
        </div>
        <div className="text-7xl text-black max-md:max-w-full max-md:text-4xl">
          Let's check
        </div>

        <div className="mt-32 w-full max-w-[1036px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {footerSections.map((section, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index > 0 ? "ml-5" : ""
                } w-[25%] max-md:ml-0 max-md:w-full`}
              >
                <FooterSection title={section.title} links={section.links} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
