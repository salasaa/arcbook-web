import Cookies from "js-cookie";

import { useId, useState } from "react";
import {
  SearchIcon,
  ShoppingCart,
  ChevronDownIcon,
  CircleUserRoundIcon,
  LogOutIcon,
} from "lucide-react";
// import { ModeToggle } from '@/components/mode-toggle';
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
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
  DropdownMenuLabel,
} from "~/components/ui/dropdown-menu";
import { Link, useNavigate } from "react-router";

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

// --- Search Form ---
const SearchForm = ({ id }: { id: string }) => (
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

export default function Navbar() {
  const id = useId();

  const navigate = useNavigate();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const userToken = Cookies.get("token");

  const isLoggedIn = userToken !== undefined;

  const handleLogout = () => {
    Cookies.remove("token");

    setIsDropdownOpen(false);

    navigate("/");
  };

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

        <div className="flex items-center gap-2">
          <Button asChild size="sm" variant="outline">
            <a href="/cart" className="flex items-center gap-2">
              <ShoppingCart size={16} />
            </a>
          </Button>
        </div>

        {isLoggedIn ? (
          <DropdownMenu
            open={isDropdownOpen}
            onOpenChange={setIsDropdownOpen}
            modal={false}
          >
            <DropdownMenuTrigger asChild>
              <Button
                size="icon"
                variant="outline"
                aria-label="Open account menu"
              >
                <CircleUserRoundIcon size={16} aria-hidden="true" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" sideOffset={10} className="w-35">
              <DropdownMenuLabel className="flex items-start gap-2">
                <img
                  src="/origin/avatar.jpg"
                  alt="Avatar"
                  width={30}
                  height={30}
                  className="shrink-0 rounded-full"
                />
                <div className="flex min-w-0 flex-col">
                  <span className="truncate text-sm font-medium text-foreground">
                    Keith Kennedy
                  </span>
                  <span className="truncate text-xs font-normal text-muted-foreground">
                    k.kennedy@coss.com
                  </span>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={handleLogout}
                className="cursor-pointer"
              >
                <LogOutIcon size={16} />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <div className="flex items-center gap-2">
            <Button asChild variant="ghost" size="sm" className="text-sm">
              <a href="/login">Login</a>
            </Button>
            <Button asChild variant="secondary" size="sm" className="text-sm">
              <a href="/register">Register</a>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
