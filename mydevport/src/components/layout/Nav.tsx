import { useState, Fragment } from "react";
import { Dialog, Transition  } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";


const navigation = [
  { name: "About me", to: "/About" },
  { name: "Projects", to: "/Projects" },
  { name: "Carrer", to: "/CareerPage" },
  { name: "Blog", to: "/BlogPage" },
];

export function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileNavigate = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `
              -m-1.5 p-1.5 rounded-md transition-all duration-200
              flex items-center justify-center
              active:bg-gray-700
              ${isActive
                ? "ring-2 ring-indigo-500"
                : "hover:bg-gray-800 active:bg-gray-700"}

              focus-visible:outline
              focus-visible:outline-2
              focus-visible:outline-indigo-500
              `
            }
          >
            <span className="sr-only">Ramon Baier</span>
            <img
              className="h-8 w-auto"
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
              alt=""
            />
          </NavLink>

        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-100 hover:bg-gray-700 active:bg-indigo-500"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Menu Mobile open</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <NavLink key={item.name} to={item.to} className={({ isActive }) =>
            `nav-link ${
              isActive ? 'nav-link-active' : 'nav-link-default'}`
            }>
              {item.name}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <NavLink to="/ContactPage" className={({ isActive }) =>
            `nav-link ${
              isActive ? 'nav-link-active' : 'nav-link-default'}`
            }>
            Contact-me <span aria-hidden="true"> →</span>
          </NavLink>
        </div>
      </nav>

      <Transition show={mobileMenuOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 lg:hidden"
          onClose={setMobileMenuOpen}
        >
          {/* Overlay */}
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/50" />
          </Transition.Child>

          {/* Painel */}
          <Transition.Child
            as={Fragment}
            enter="transition-transform ease-out duration-300"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition-transform ease-in duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel
              className="
                fixed inset-y-0 right-0 z-50 w-full
                overflow-y-auto bg-gray-800 px-6 py-6
                sm:max-w-sm ring-1 ring-white/10
              "
            >
              {/* HEADER */}
              <div className="flex items-center justify-between">
                <NavLink
                  to="/"
                  end
                  onClick={handleMobileNavigate}
                  className={({ isActive }) =>
                    `
                    -m-1.5 p-1.5 rounded-md transition-all duration-200
                    flex items-center justify-center
                    ${isActive
                      ? "ring-2 ring-indigo-500"
                      : "hover:bg-gray-800 active:bg-gray-700"}
                    focus-visible:outline
                    focus-visible:outline-2
                    focus-visible:outline-indigo-500
                    `
                  }
                >
                  <span className="sr-only">Ramon Baier</span>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                    alt=""
                  />
                </NavLink>

                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-200 hover:bg-gray-700 active:bg-indigo-500"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>

              {/* LINKS */}
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.to}
                        onClick={handleMobileNavigate}
                        className={({ isActive }) =>
                          `
                          -mx-3 block rounded-lg px-3 py-2 text-base font-semibold
                          leading-7 text-gray-200 transition-all
                          ${isActive
                            ? "ring-2 ring-indigo-600 bg-gray-700"
                            : "hover:bg-gray-800 active:bg-indigo-600"}
                          focus-visible:outline
                          focus-visible:outline-2
                          focus-visible:outline-indigo-500
                          `
                        }
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>

                  <div className="py-6">
                    <NavLink
                      to="/ContactPage"
                      onClick={handleMobileNavigate}
                      className={({ isActive }) =>
                        `
                        -mx-3 block rounded-lg px-3 py-2 text-base font-semibold
                        leading-7 text-gray-200 transition-all
                        ${isActive
                          ? "ring-2 ring-indigo-600 bg-gray-700"
                          : "hover:bg-gray-800 active:bg-indigo-600"}
                        focus-visible:outline
                        focus-visible:outline-2
                        focus-visible:outline-indigo-500
                        `
                      }
                    >
                      Contact-me
                    </NavLink>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </header>
  );
}
