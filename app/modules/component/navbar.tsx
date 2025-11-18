import { useId } from "react";
import { SearchIcon, ShoppingCart, ChevronDownIcon } from "lucide-react";
// import { ModeToggle } from '@/components/mode-toggle';
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "~/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuPortal,
} from "~/components/ui/dropdown-menu";
import { Link } from "react-router";

const categoryLinks = [
  { href: "/categories/comics", label: "Comics" },
  { href: "/categories/fiction", label: "Fiction" },
  { href: "/categories/non-fiction", label: "Non-Fiction" },
];
export const authorLinks = [
  { href: "/authors/eiichiro-oda", label: "Eiichiro Oda" },
  { href: "/authors/guru-gembul", label: "Guru Gembul" },
  { href: "/authors/dr-muhammad-faisal", label: "Dr. Muhammad Faisal" },
  { href: "/authors/grant-snider", label: "Grant Snider" },
  { href: "/authors/t-a-s-a", label: "T.A.S.A" },
];

const CategoryDropdown = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button
        variant="ghost"
        className="text-muted-foreground hover:text-primary py-1.5 font-medium transition-colors gap-1"
      >
        Categories <ChevronDownIcon size={16} />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-56">
      <DropdownMenuGroup>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Books</DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              {categoryLinks.map((link, index) => (
                <DropdownMenuItem key={index} asChild>
                  <a href={link.href}>{link.label}</a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Authors</DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              {authorLinks.map((link, index) => (
                <DropdownMenuItem key={index} asChild>
                  <a href={link.href}>{link.label}</a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
      </DropdownMenuGroup>
    </DropdownMenuContent>
  </DropdownMenu>
);

// --- Mobile Menu ---
// removed mobile menu; mobile view will show only logo, search and cart

// --- Search Form ---
const SearchForm = ({ id }: { id: string }) => (
  // show search on mobile and desktop; adjust max width
  <div className="relative max-w-lg flex-1 block">
    <Input
      id={id}
      className="peer h-9 ps-9 pe-2 w-full placeholder:text-gray-300 placeholder:italic"
      placeholder="Search for books, authors, or categories..."
      type="search"
    />
    <div className="text-muted-foreground/40 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
      <SearchIcon size={16} />
    </div>
  </div>
);

// --- Right Actions ---
const RightActions = () => (
  <nav>
    <ul>
      <li>
        <div className="flex items-center gap-2">
          {/* Login/Register only on desktop */}
          <div className="hidden md:flex items-center gap-2">
            <Button asChild variant="ghost" size="sm" className="text-sm">
              <a href="/login">Login</a>
            </Button>
            <Button asChild variant="secondary" size="sm" className="text-sm">
              <a href="/register">Register</a>
            </Button>
          </div>

          {/* Cart: visible on mobile and desktop */}
          <Button asChild size="sm" className="text-sm rounded-md">
            <a href="/cart" className="flex items-center gap-2">
              <ShoppingCart size={16} />
            </a>
          </Button>
        </div>
      </li>
    </ul>
  </nav>
);

export default function Navbar() {
  const id = useId();

  return (
    <header className="sticky top-0 z-40 border-b bg-white/30 dark:bg-dark-950/50 backdrop-blur-2xl transition-all duration-300 w-full">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 md:px-6">
        <div className="flex items-center gap-4">
          <a
            href="/"
            aria-label="Arcbooks Home"
            className="text-primary hover:text-primary/90"
          >
            <img
              src="/arcbooks-logo.svg"
              alt="Arcbooks Logo"
              className="h-10 md:h-20"
            />
          </a>
        </div>

        {/* Mobile: show compact search between logo and actions */}
        <div className="flex-1 px-2 md:hidden">
          <SearchForm id={id} />
        </div>

        {/* Desktop navigation (categories + search) */}
        <div className="hidden md:flex w-full max-w-xl mx-auto flex-1 items-center justify-start gap-8">
          <CategoryDropdown />

          <SearchForm id={id} />
        </div>

        <RightActions />
      </div>
    </header>
  );
}
