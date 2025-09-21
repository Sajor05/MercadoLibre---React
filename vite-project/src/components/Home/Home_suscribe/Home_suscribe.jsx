import "./Home_suscribe.css";
export function Suscribe() {
  return (
    <>
      <div className="flex justify-center">
        <div className="home-suscribe-container bg-white h-[200px] w-[1180px]">
          <header className="home-suscribe-header-container text-white bg-gradient-to-r from-[#5A238D] to-[#AA1192] p-5">
            <h3 className="font-bold">Suscribete desde $3.490/mes</h3>
          </header>
          <main className="p-5">
            <h3 className="font-bold">Ahorrá en tus envíos y compras</h3>
            <div className="grid grid-cols-3"></div>
          </main>
        </div>
      </div>
    </>
  );
}
