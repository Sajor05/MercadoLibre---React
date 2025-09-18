import { Main_carousel } from "./Home_carrousel/Main_Carrousel/Main_carousel";
import { Recommendations } from "./Home_carrousel/Recommendation_carrousel/Recommendations";
export function Home() {
  return (
    <>
      <section>
        <div>
          <Main_carousel></Main_carousel>
          <main className="flex justify-center p-7">
            <Recommendations></Recommendations>
          </main>
        </div>
      </section>
    </>
  );
}
