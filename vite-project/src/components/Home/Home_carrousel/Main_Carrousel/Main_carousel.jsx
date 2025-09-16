import Carrousel_1 from "../../../../assets/Carrousel/carrousel1.jpg";
import Carrousel_2 from "../../../../assets/Carrousel/carrousel2.jpg";
import Carrousel_3 from "../../../../assets/Carrousel/carrousel3.jpg";
import Carrousel_4 from "../../../../assets/Carrousel/carrousel4.jpg";
import Carrousel_5 from "../../../../assets/Carrousel/carrousel5.jpg";
import { Carousel } from "./Carousel";

const carousel_images = [
  Carrousel_1,
  Carrousel_2,
  Carrousel_3,
  Carrousel_4,
  Carrousel_5,
];

export function Main_carousel() {
  return (
    <main>
      <div>
        <Carousel>
          {carousel_images.map((s) => (
            <img src={s} />
          ))}
        </Carousel>
      </div>
    </main>
  );
}
