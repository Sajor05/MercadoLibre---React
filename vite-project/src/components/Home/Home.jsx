import { Main_carousel } from "./Home_carrousel/Main_Carrousel/Main_carousel";
import { Recomendation_carrousel } from "./Home_carrousel/Recommendation_carrousel/Recommendation_carrousel";
export function Home() {
  return (
    <>
      <main>
        <div>
          <Main_carousel></Main_carousel>
          <Recomendation_carrousel></Recomendation_carrousel>
        </div>
      </main>
    </>
  );
}
