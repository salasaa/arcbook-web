import arcbookLogo from '/arcbooks-logo.png';
import { Button } from "@/components/ui/button";

export function App() {
  return (
    <div className="min-h-screen p-4 text-gray-200 transition-colors duration-200 sm:p-6 md:p-8 dark:bg-gray-900 dark:text-gray-100">
      <a href="#" target="_blank">
        <img src={arcbookLogo} className="logo w-50" alt="Arcbooks logo" />
      </a>
      <Book />
    </div>
  );

}

export function Book({bookName, bookDescription, bookPrice}:{bookName?:string, bookDescription?:string, bookPrice?:number}) {
  return (
    <div className="min-h-screen p-4 text-gray-200 transition-colors duration-200 sm:p-6 md:p-8 dark:bg-gray-900 dark:text-gray-100">
      <div className="min-h-[calc(100vh-2rem)] max-w-xl flex-col sm:min-h-[calc(100vh-3rem)]">
        <section className="mb-4 ">
          <div className="flex items-end space-x-2">
            <h1 className="font-['Inter'] text-2xl font-bold sm:text-3xl">
              Arcbooks
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-300">
              No.1 E-Commerce Books in Here
            </p>
            <Button className="mt-2 bg-amber-100">Add to Cart</Button>
          </div>
        </section>
        <section className="mb-4">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">{bookName}</h2>
            <p className="text-gray-500 dark:text-gray-400">
              {bookDescription}
            </p>
            <p className="text-xl font-bold text-green-500">${bookPrice}</p>
          </div>
        </section>
      </div>
    </div>
  );
}
