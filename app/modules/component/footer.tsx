export function Footer() {
  return (
    <footer className="mx-auto py-4 text-center bg-gray-200 dark:bg-dark-950/50 backdrop-blur-2xl w-full">
      <div>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Arcbooks. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
