import { IconArrowRight } from "@tabler/icons-react";

export function HomeBannerSection() {
  return (
    <section id="home-banner">
      <div className="banner-image"></div>
      <div className="banner-content">
        <div className="banner-info">
          <span>New menu</span>
          <h1>Now serving summer</h1>
          <button type="button" className="button">
            Order now
            <IconArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
