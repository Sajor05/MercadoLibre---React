import Article_image1 from "../../../../assets/Related_history/Article1.jpg";

export function Article1() {
  return (
    <article className="p-5 rounded-md">
      <div className="flex justify-center recomendation-carousel-article-img text-center p-2">
        <img src={Article_image1} alt="#" className="h-[150px] w-[150px]" />
      </div>
      <div className="recomendation-carousel-article-title text-justify text-sm line-clamp-2 px-2">
        <a href="#">
          Zapatillas De Hombre Trekking Reforzadas Action Team 36 A 47 Chocolate
          41 Ar
        </a>
      </div>
      <section className="recomendation-carousel-article-price-container px-2">
        <div className="recomendation-carousel-article-old-price text-xs">
          <s className="text-gray-500">
            <span className="text-gray-400">
              $<span className="text-gray-400">229.734</span>
            </span>
          </s>
        </div>
        <div className="text-lg">
          <span>
            $<span>198.839 </span>
          </span>
          <span className="text-xs text-[#00a650]">13% OFF</span>
        </div>
      </section>
      <footer className="recomendation-carousel-article-footer-container">
        <span className="text-xs text-[#00a650]">Envío gratis</span>
      </footer>
    </article>
  );
}
