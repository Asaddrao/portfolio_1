export function Footer() {
  return (
    <footer className="py-12 px-6 bg-gradient-to-t from-muted/20 to-background border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-text-secondary mb-4 md:mb-0 font-medium">
            © 2024 Asad Rao. All rights reserved.
          </div>
          <div className="text-text-muted text-sm">
            Built with React, TypeScript & Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
}