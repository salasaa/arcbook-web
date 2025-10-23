export type Author = {
  id: string;
  slug: string;
  name: string;
  createdAt: Date | string;
  updatedAt: Date | string;
};

export type Authors = Author[];
