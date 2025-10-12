import { Book } from '@/components/books';
import { CarouselHero } from '@/components/carousel';

export function App() {
  return (
    <div className="min-h-screen p-4 text-gray-200 transition-colors duration-200 sm:p-6 md:p-8 dark:bg-gray-900 dark:text-gray-100">
      <div className="w-full">
        <CarouselHero />
      </div>
      <main className="mx-auto max-w-7xl md:px-6">
        <div className="mt-8 flex flex-row gap-4 overflow-x-auto pb-4">
          <Book title="One Piece Vol. 97" isFiction />
          <Book title="Generasi Kembali ke Akar" isFiction={false} />
          <Book title="Beyond Belief: Fact or Fiction" isFiction />
          <Book title="The Subtle Art of Not Giving a F*ck" isFiction={false} />
          <Book title="The Lord of the Rings" isFiction />
          <Book title="Beyond Belief: Fact or Fiction" isFiction />
          <Book title="The Subtle Art of Not Giving a F*ck" isFiction={false} />
          <Book title="The Lord of the Rings" isFiction />
          <Book title="The Lord of the Rings" isFiction />
          <Book title="The Lord of the Rings" isFiction />
        </div>
      </main>
    </div>
  );
}
