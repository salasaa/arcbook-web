import { useId } from "react";
import { SearchIcon, MenuIcon, ShoppingCart, LogIn } from "lucide-react";
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

const navigationLinks = [{ href: "#", label: "Categories" }];

// --- Mobile Menu ---
const MobileMenu = () => (
  <Popover>
    <PopoverContent align="start" className="w-36 md:hidden">
      <NavigationMenu className="max-w-none *:w-full">
        <NavigationMenuList className="flex-col items-start gap-0">
          {navigationLinks.map((link, index) => (
            <NavigationMenuItem key={index} className="w-full">
              <NavigationMenuLink
                href={link.href}
                className="py-1.5 font-medium hover:bg-accent/50 block rounded-md px-2"
              >
                {link.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
          <NavigationMenuItem
            className="w-full"
            role="presentation"
            aria-hidden="true"
          >
            <div role="separator" className="bg-border -mx-1 my-1 h-px"></div>
          </NavigationMenuItem>
          <NavigationMenuItem className="w-full">
            <NavigationMenuLink
              href="/login"
              className="py-1.5  items-center gap-2 font-medium hover:bg-accent/50 block rounded-md px-2"
            >
              <LogIn size={16} /> Login
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="w-full">
            <NavigationMenuLink
              href="#"
              className="py-1.5  items-center gap-2 font-medium hover:bg-accent/50 block rounded-xl px-2"
            >
              <ShoppingCart size={16} />
              <span className="ml-auto text-primary text-xs font-bold">2</span>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </PopoverContent>
    <PopoverTrigger asChild>
      <Button
        className="size-8 md:hidden"
        variant="ghost"
        size="icon"
        aria-label="Toggle navigation menu"
      >
        <MenuIcon size={20} />
      </Button>
    </PopoverTrigger>
  </Popover>
);

// --- Search Form ---
const SearchForm = ({ id }: { id: string }) => (
  <div className="relative hidden max-w-lg flex-1 md:block">
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

// --- Right Actions (Desktop) ---
const RightActions = () => (
  <div className="flex items-center gap-2">
    <Button asChild variant="ghost" size="sm" className="text-sm">
      <a href="/login">Login</a>
    </Button>
    <Button asChild size="sm" className="text-sm rounded-md">
      <a href="#" className="flex items-center gap-2">
        <ShoppingCart size={16} />
      </a>
    </Button>
  </div>
);

export default function Navbar() {
  const id = useId();

  return (
    <header className="sticky top-0 z-40 border-b bg-white/30 dark:bg-dark-950/50 backdrop-blur-2xl transition-all duration-300 w-full">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 md:px-6">
        <div className="flex items-center gap-4">
          <MobileMenu />
          <a
            href="/"
            aria-label="Arcbooks Home"
            className="text-primary hover:text-primary/90"
          >
            <img
              src="/arcbooks-logo.svg"
              alt="Arcbooks Logo"
              className="h-20"
            />
          </a>
        </div>

        <div className="flex w-full max-w-xl mx-auto flex-1 items-center justify-start gap-8 max-md:hidden">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              {navigationLinks.map((link, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink
                    href={link.href}
                    className="text-muted-foreground hover:text-primary py-1.5 font-medium transition-colors"
                  >
                    {link.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <SearchForm id={id} />
        </div>

        <RightActions />
      </div>
    </header>
  );
}
