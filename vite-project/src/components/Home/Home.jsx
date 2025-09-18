import { Main_carousel } from "./Home_carrousel/Main_Carrousel/Main_carousel";
import { Related_history } from "./Last_seen/Related_history";

export function Home() {
  return (
    <>
      <div>
        <section className="main_carousels relative">
          <Main_carousel></Main_carousel>
        </section>
        <section className="related_history_carousel">
          <Related_history></Related_history>
        </section>
      </div>
    </>
  );
}
