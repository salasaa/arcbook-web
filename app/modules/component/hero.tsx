import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "~/components/ui/carousel";
import { Card, CardContent } from "~/components/ui/card";

export function Hero() {
  return (
    <div className="flex h-96 w-full gap-4">
      <div className="relative w-full lg:w-[70%]">
        <Carousel className="flex h-full w-full">
          <CarouselContent className="h-full">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="h-full">
                <div className="h-full p-1">
                  <Card className="h-full">
                    <CardContent className="flex h-full items-center justify-center p-6">
                      <span className="text-4xl font-semibold">
                        Carousel {index + 1}
                      </span>
                    </CardContent>
                  </Card>
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
          <Card className="h-full">
            <CardContent className="flex h-full items-center justify-center bg-blue-100 p-6">
              <span className="text-xl font-medium text-blue-800">
                Banner Kanan Atas
              </span>
            </CardContent>
          </Card>
        </div>

        <div className="flex-1">
          <Card className="h-full">
            <CardContent className="flex h-full items-center justify-center bg-green-100 p-6">
              <span className="text-xl font-medium text-green-800">
                Banner Kanan Bawah
              </span>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
