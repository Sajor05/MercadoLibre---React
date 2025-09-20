import "./Related_history.css";
import { Recommendations } from "../Home_carrousel/Recommendation_carrousel/Recommendations";
export function Related_history() {
  return (
    <>
      <div className="flex justify-center">
        <section className="related_history-container bg-white h-[441px] w-[1180px] p-[20px]">
          <header className="related_history-header-container flex justify-between">
            <h3 className="font-bold">Inspirado en lo último que viste</h3>
            <ul className="flex gap-3">
              <li>
                <button
                  type="button"
                  className="p-1 rounded-full shadow bg-gray-200 text-gray-800 hover:bg-white cursor-pointer"
                ></button>
              </li>
              <li>
                <button
                  type="button"
                  className="p-1 rounded-full shadow bg-gray-200 text-gray-800 hover:bg-white cursor-pointer"
                ></button>
              </li>
              <li>
                <button
                  type="button"
                  className="p-1 rounded-full shadow bg-gray-200 text-gray-800 hover:bg-blue-200 cursor-pointer"
                ></button>
              </li>
              <li>
                <button
                  type="button"
                  className="p-1 rounded-full shadow bg-gray-200 text-gray-800 hover:bg-white cursor-pointer"
                ></button>
              </li>
            </ul>
          </header>
          <main>
            <Recommendations></Recommendations>
          </main>
        </section>
      </div>
    </>
  );
}
