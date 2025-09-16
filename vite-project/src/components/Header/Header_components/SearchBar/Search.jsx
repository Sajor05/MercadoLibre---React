import "./Search.css";

export function SearchBar() {
  return (
    <>
      <div className="searchBar shadow-md">
        <input type="text" placeholder="Buscar marcas, productos y mas..." />
        <button className="cursor-pointer p-2 text-center">ingresar</button>
      </div>
    </>
  );
}
