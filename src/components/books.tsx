import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card';
import { StarIcon } from 'lucide-react';

export function Book({
  title,
  isFiction,
}: {
  title: string;
  isFiction?: boolean;
}) {
  const category = isFiction ? 'Fiction' : 'Non-Fiction';

  return (
    <div className="">
      <div title={category}></div>
      <Card className="w-48 flex-shrink-0">
        <CardContent className="p-3">
          <div className="mb-2 aspect-square rounded-md bg-gray-100">
            <div className="text-muted-foreground flex h-full items-center justify-center text-xs">
              Product Image
            </div>
          </div>
          <CardTitle className="mb-1 text-sm">{title}</CardTitle>
          <CardDescription className="mb-2 line-clamp-2 text-xs">
            The **{title}** is a **{category.toLowerCase()}** book.
          </CardDescription>
          <div className="mb-2 flex items-center space-x-1">
            <div className="flex">
              {[1, 2, 3, 4].map((star) => (
                <StarIcon
                  key={star}
                  className="h-3 w-3 fill-yellow-400 text-yellow-400"
                />
              ))}
              <StarIcon className="h-3 w-3 text-gray-300" />
            </div>
            <span className="text-muted-foreground text-xs">(4.0)</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold">IDR 99000</span>
            <Button size="sm" className="h-7 px-2 py-1 text-xs">
              Add
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
