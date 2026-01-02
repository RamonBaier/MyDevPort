import * as Dialog from "@radix-ui/react-dialog";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";

export function Nav() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold tracking-tight text-gray-900"
        >
          Ramon<span className="text-blue-500">.</span>
        </Link>

        {/* Desktop menu */}
        <nav className="hidden md:flex gap-8">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">Sobre</NavLink>
          <NavLink to="/projects">Projetos</NavLink>
          <NavLink to="/contact">Contato</NavLink>
        </nav>

        {/* Mobile menu */}
        <Dialog.Root>
          <Dialog.Trigger className="md:hidden p-2 rounded hover:bg-gray-100 transition">
            <HamburgerMenuIcon width={24} height={24} />
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/40" />
            <Dialog.Content className="fixed top-0 right-0 h-full w-64 bg-white p-6 shadow-lg flex flex-col">
              
              <div className="flex items-center justify-between mb-8">
                <span className="text-lg font-semibold">Menu</span>
                <Dialog.Close className="p-2 rounded hover:bg-gray-100">
                  <Cross1Icon />
                </Dialog.Close>
              </div>

              <nav className="flex flex-col gap-4">
                <MobileNavLink to="/">Home</MobileNavLink>
                <MobileNavLink to="/about">Sobre</MobileNavLink>
                <MobileNavLink to="/projects">Projetos</MobileNavLink>
                <MobileNavLink to="/contact">Contato</MobileNavLink>
              </nav>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  );
}

/* ----------------- Helpers ----------------- */

function NavLink({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      to={to}
      className="text-gray-700 hover:text-gray-900 font-medium transition"
    >
      {children}
    </Link>
  );
}

function MobileNavLink({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) {
  return (
    <Dialog.Close asChild>
      <Link
        to={to}
        className="text-lg font-medium text-gray-800 hover:text-blue-500 transition"
      >
        {children}
      </Link>
    </Dialog.Close>
  );
}
