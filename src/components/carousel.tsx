// src/components/carousel-hero.tsx atau sejenisnya
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from './ui/carousel';
import { Card, CardContent } from './ui/card';

export function CarouselHero() {
  return (
    <Carousel className="m-0 flex w-full">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-video h-96 items-center justify-center">
                  {/* Aspect-video dan h-96 ditambahkan agar hero terlihat besar */}
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Panggil Navigasi Panah */}
      <CarouselPrevious className="absolute top-1/2 left-4 hidden -translate-y-1/2 md:flex" />
      <CarouselNext className="absolute top-1/2 right-4 hidden -translate-y-1/2 md:flex" />
    </Carousel>
  );
}
