import {
  Header,
  HomeBannerSection,
  HomeCarouselSection,
} from "./components/layout";

import "@fontsource/roboto/100.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  return (
    <div>
      <Header />
      <main>
        <HomeBannerSection />
        <HomeCarouselSection />
      </main>
    </div>
  );
}

export default App;
