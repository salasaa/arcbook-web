import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "~/components/ui/carousel";

export function Hero() {
  return (
    <div className="flex h-96 w-full gap-4">
      <div className="relative w-full lg:w-[70%]">
        <Carousel className="flex h-full w-full">
          <CarouselContent className="h-full">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="h-full">
                <div className="h-full rounded-xl overflow-hidden relative">
                  <img src="/banner-2.jpg" className="rounded-2xl" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute top-1/2 left-1 hidden -translate-y-1/2 md:flex" />
          <CarouselNext className="absolute top-1/2 right-1 hidden -translate-y-1/2 md:flex" />
        </Carousel>
      </div>
      <div className="hidden w-[30%] flex-col gap-4 lg:flex">
        <div className="flex-1">
          <span className="text-xl font-medium text-dark-800">
            <img
              src="/banner-1.jpg"
              alt="Banner kanan atas"
              className="w-full h-full object-cover rounded-xl"
            />
          </span>
        </div>

        <div className="flex-1">
          <span className="text-xl font-medium text-dark-800">
            <img
              src="/banner-1.jpg"
              alt="Banner kanan atas"
              className="w-full h-full object-cover rounded-xl"
            />
          </span>
        </div>
      </div>
    </div>
  );
}
