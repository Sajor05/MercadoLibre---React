export function ArticleCard({ product }) {
  return (
    <article className="p-5 rounded-md">
      <div className="flex justify-center recomendation-carousel-article-img text-center p-2">
        <img
          src={product.image}
          alt={product.title}
          className="h-[150px] w-[150px]"
        />
      </div>
      <div className="recomendation-carousel-article-title text-justify text-sm line-clamp-2 px-2">
        <a href="#">{product.title}</a>
      </div>
      <section className="recomendation-carousel-article-price-container px-2">
        <div className="recomendation-carousel-article-old-price text-xs">
          <s className="text-gray-500">
            <span className="text-gray-400">
              $<span className="text-gray-400">229.734</span>
            </span>
          </s>
        </div>
        <div className="recomendation-carousel-article-actual-price text-lg">
          <span>
            $<span>{product.price} </span>
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
