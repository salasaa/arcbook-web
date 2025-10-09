import arcbookLogo from "/arcbooks-logo.png";
import { Button } from "@/components/ui/button";

import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { StarIcon } from "lucide-react";


export function App() {
  return (
    
      <div className="min-h-screen p-4 text-gray-200 transition-colors duration-200 sm:p-6 md:p-8 dark:bg-gray-900 dark:text-gray-100">
        <a href="#" target="_blank">
          <img src={arcbookLogo} className="logo w-50" alt="Arcbooks logo" />
        </a>
        

        <div className="flex flex-row gap-4 mt-8 overflow-x-auto pb-4">
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
      </div>
  );
}

export function Book({ title, isFiction }: { title: string, isFiction?: boolean }) {
  const category = isFiction ? "Fiction" : "Non-Fiction";
  
  return (
    <div className="flex flex-row gap-0 flex-shrink-0"> 
      <div 
        title={category}
      >
      </div>
      <Card className="w-48 flex-shrink-0">
        <CardContent className="p-3">
          <div className="aspect-square rounded-md bg-gray-100 mb-2">
            <div className="flex items-center justify-center h-full text-muted-foreground text-xs">
              Product Image
            </div>
          </div>
          <CardTitle className="text-sm mb-1">{title}</CardTitle>
          <CardDescription className="text-xs mb-2 line-clamp-2">
            The **{title}** is a **{category.toLowerCase()}** book.
          </CardDescription>
          <div className="flex items-center space-x-1 mb-2">
            <div className="flex">
              {[1, 2, 3, 4].map((star) => (
                <StarIcon
                  key={star}
                  className="h-3 w-3 fill-yellow-400 text-yellow-400"
                />
              ))}
              <StarIcon className="h-3 w-3 text-gray-300" />
            </div>
            <span className="text-xs text-muted-foreground">(4.0)</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold">IDR 99000</span>
            <Button size="sm" className="text-xs px-2 py-1 h-7">Add</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}