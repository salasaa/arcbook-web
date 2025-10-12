// src/components/carousel-hero.tsx atau sejenisnya
import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from './ui/carousel';
import { Card, CardContent } from './ui/card';

export function CarouselHero() {
  const autoplayPlugin = React.useRef(
    Autoplay({
      delay: 5000,
      stopOnInteraction: true,
      stopOnMouseEnter: true,
    }),
  );

  return (
    // 1. Kontainer Utama:
    // - Tinggi tetap 96.
    // - Pada layar besar (lg), gunakan flex dan gap 4 (tata letak 70/30).
    // - Pada layar kecil, biarkan flex-col atau default (Carousel akan mengambil w-full karena banner hidden).
    <div className="flex h-96 w-full gap-4">
      {/* 2. Bagian Kiri: Carousel */}
      {/* - Default: w-full (ambil lebar penuh di layar kecil). */}
      {/* - Layar besar (lg): w-[70%] (ambil 70% lebar). */}
      <div className="relative w-full lg:w-[70%]">
        <Carousel
          className="flex h-full w-full"
          plugins={[autoplayPlugin.current]}
          onMouseEnter={() => autoplayPlugin.current.stop()}
          onMouseLeave={() => autoplayPlugin.current.play()}
        >
          <CarouselContent className="h-full">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="h-full">
                {/* Pastikan CardContent juga h-full agar Carousel tidak kehilangan tingginya */}
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

          {/* Navigasi Carousel: Tetap sama */}
          <CarouselPrevious className="absolute top-1/2 left-1 hidden -translate-y-1/2 md:flex" />
          <CarouselNext className="absolute top-1/2 right-1 hidden -translate-y-1/2 md:flex" />
        </Carousel>
      </div>

      {/* 3. Bagian Kanan: Dua Banner Statis Vertikal */}
      {/* - Default: hidden (sembunyikan di layar kecil). */}
      {/* - Layar besar (lg): flex dan w-[30%] (tampilkan 30% lebar). */}
      <div className="hidden w-[30%] flex-col gap-4 lg:flex">
        {/* Banner Atas */}
        <div className="flex-1">
          <Card className="h-full">
            <CardContent className="flex h-full items-center justify-center bg-blue-100 p-6">
              <span className="text-xl font-medium text-blue-800">
                Banner Kanan Atas
              </span>
            </CardContent>
          </Card>
        </div>

        {/* Banner Bawah */}
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
