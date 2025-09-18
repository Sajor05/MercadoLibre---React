import { Main_carousel } from "./Home_carrousel/Main_Carrousel/Main_carousel";
import { Related_history } from "./Last_seen/Related_history";
import { Recommendations } from "./Home_carrousel/Recommendation_carrousel/Recommendations";

export function Home() {
  return (
    <>
      <div>
        <section className="relative">
          <Main_carousel></Main_carousel>
        </section>
        <div>
          <h1>Hola mundo</h1>
        </div>
      </div>
    </>
  );
}
