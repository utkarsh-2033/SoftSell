import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export default function Nav({ darkMode, toggleDarkMode }) {
  return (
    <nav className="fixed w-full bg-white dark:bg-gray-900 shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary-600">SoftSell</div>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {darkMode ? (
              <SunIcon className="h-6 w-6 text-yellow-500" />
            ) : (
              <MoonIcon className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>
      </nav>
  );
}