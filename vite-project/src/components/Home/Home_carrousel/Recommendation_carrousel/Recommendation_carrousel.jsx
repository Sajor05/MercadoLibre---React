import "./Recommendation_carrousel.css";
import Recomendation1 from "../../../../assets/Recomendation-carousel/recomendation1.jpg";
import Recomendation2 from "../../../../assets/Recomendation-carousel/recomendation2.jpg";
import Recomendation3 from "../../../../assets/Recomendation-carousel/recomendation3.jpg";
import Recomendation4 from "../../../../assets/Recomendation-carousel/recomendation4.jpg";
import Recomendation5 from "../../../../assets/Recomendation-carousel/recomendation5.jpg";

export function Recomendation_carrousel() {
  return (
    <>
      <section className="p-5">
        <div className="grid grid-cols-10 gap-4">
          {/*
          ---------------------------------------
          -- P O R Q U E  T E  I N T E R E S A --
          ---------------------------------------
          */}
          <article className="p-5">
            <div className="recomendation-carousel-article-header">
              <h4 className="article-recomendation-title text-sm/8 font-bold">
                Porque te interesa
              </h4>
            </div>
            <div className="recomendation-carousel-article-img text-center">
              <img src={Recomendation1} alt="#" />
            </div>
            <div className="recomendation-carousel-article-title text-justify text-sm">
              <a href="#">Juego X2 Faros Traseros 72 Leds...</a>
            </div>
          </article>

          {/*
          ----------------------------------------
          -- I N G R E S Á  A  T U  C U E N T A --
          ----------------------------------------
          */}
          <article className="p-5">
            <div className="recomendation-carousel-article-header">
              <h4 className="article-recomendation-title text-sm/8 font-bold">
                Ingresá a tu cuenta
              </h4>
            </div>
            <div className="recomendation-carousel-article-img flex text-center justify-center">
              <img src={Recomendation2} alt="#" />
            </div>
          </article>

          {/*
          ----------------------------------------------
          -- I N G R E S Á  A  T U  U B I C A C I Ó N --
          ----------------------------------------------
          */}
          <article className="p-5">
            <div className="recomendation-carousel-article-header">
              <h4 className="article-recomendation-title text-sm/8 font-bold">
                Ingresá tu ubicación
              </h4>
            </div>
            <div className="recomendation-carousel-article-img flex text-center justify-center">
              <img src={Recomendation3} alt="#" />
            </div>
          </article>

          {/*
          ----------------------
          -- L O  Q U E R É S --
          ----------------------
          */}
          <article className="p-5">
            <div className="recomendation-carousel-article-header">
              <h4 className="article-recomendation-title text-sm/8 font-bold">
                Lo querés
              </h4>
            </div>
            <div className="recomendation-carousel-article-img text-center">
              <img src={Recomendation4} alt="#" />
            </div>
          </article>

          {/*
          ------------------------------------------
          -- V I S T O  R E C I E N T E M E N T E --
          ------------------------------------------
          */}
          <article className="p-5">
            <div className="recomendation-carousel-article-header">
              <h4 className="article-recomendation-title text-sm/8 font-bold">
                Visto recientemente
              </h4>
            </div>
            <div className="recomendation-carousel-article-img text-center">
              <img src={Recomendation5} alt="#" />
            </div>
            <div className="recomendation-carousel-article-title"></div>
          </article>

          {/*
          -------------------------------
          -- M E D I O S  D E  P A G O --
          -------------------------------
          */}
          <article className="p-5">
            <div className="recomendation-carousel-article-header">
              <h4 className="article-recomendation-title text-sm/8 font-bold">
                Medios de pago
              </h4>
            </div>
            <div className="recomendation-carousel-article-img text-center">
              imagen
            </div>
          </article>

          {/*
          -----------------------------------
          -- M E N O S  D E  $ 2 0 . 0 0 0 --
          -----------------------------------
          */}
          <article className="p-5">
            <div className="recomendation-carousel-article-header">
              <h4 className="article-recomendation-title text-sm/8 font-bold">
                Menos de $20.000
              </h4>
            </div>
            <div className="recomendation-carousel-article-img text-center">
              imagen
            </div>
          </article>

          {/*
          ----------------------------
          -- M Á S  V E N D I D O S --
          ----------------------------
          */}
          <article className="p-5">
            <div className="recomendation-carousel-article-header">
              <h4 className="article-recomendation-title text-sm/8 font-bold">
                Más vendidos
              </h4>
            </div>
            <div className="recomendation-carousel-article-img text-center">
              imagen
            </div>
          </article>

          {/*
          ------------------------------------
          -- C O M P R A  P R O T E G I D A --
          ------------------------------------
          */}
          <article className="p-5">
            <div className="recomendation-carousel-article-header">
              <h4 className="article-recomendation-title text-sm/8 font-bold">
                Compra protegida
              </h4>
            </div>
            <div className="recomendation-carousel-article-img text-center">
              imagen
            </div>
          </article>

          {/*
          --------------------------------------
          -- T I E N D A S  O F I C I A L E S --
          --------------------------------------
          */}
          <article className="p-5">
            <div className="recomendation-carousel-article-header">
              <h4 className="article-recomendation-title text-sm/8 font-bold">
                Tiendas oficiales
              </h4>
            </div>
            <div className="recomendation-carousel-article-img text-center">
              imagen
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
