import { IconArrowRight } from "@tabler/icons-react";
import { Button } from "../../elements";
import bannerImg from "./images/banner.webp";

export function HomeBannerSection() {
  return (
    <section id="home-banner" className="relative w-full">
      <div className="banner-image">
        <img src={bannerImg} className="h-[500px] min-w-full object-cover" />
      </div>
      <div className="banner-content absolute top-0 flex items-end just-start z-10 p-[20px] h-full w-full">
        <div className="banner-info text-white">
          <span className="uppercase">New menu</span>
          <h1 className="my-4 font-light text-4xl leading-[3.5rem] sm:text-[4rem]">
            Now serving summer
          </h1>
          <Button icon={<IconArrowRight size={16} />}>Order now</Button>
        </div>
      </div>
    </section>
  );
}
