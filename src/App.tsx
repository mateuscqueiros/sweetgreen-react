import "@fontsource/roboto/100.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
  Header,
  HomeBannerSection,
  HomeCarouselSection,
} from "./components/layout";

function App() {
  return (
    <div>
      <Header />
      <main className="w-full max-w-[var(--content-width)] mx-auto">
        <HomeBannerSection />
        <HomeCarouselSection />
      </main>
    </div>
  );
}

export default App;
