import { useTheme } from "next-themes";
import { useEffect } from "react";

export default function DarkModeButton() {
    const themeApi = useTheme()
    const { theme, setTheme } = themeApi;

    useEffect(() => {
        let darkModeToggle = document.querySelector('#dark-mode');
        darkModeToggle.checked = ((theme === "dark") ? true : false);
    }, [])


    /* handles dark mode toggle */
    const handleDarkMode = () => {
        setTheme(theme === "dark" ? 'light' : 'dark')
    }

    return (
        <div className='md:mr-4 text-lg'>
            <label htmlFor="dark-mode" className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100">
                <span className="material-symbols-outlined text-black dark:text-gray-100">light_mode</span>
                <span className="relative">
                    <input id="dark-mode" type="checkbox" onClick={handleDarkMode} className="hidden peer" />
                    <div className="w-10 h-6
                        rounded-full
                        shadow-inner
                        bg-gray-200
                        dark:bg-gray-400
                        peer-checked:dark:bg-violet-400"></div>
                    <div className="absolute inset-y-0 left-0 w-4 h-4 m-1
                        rounded-full
                        shadow
                        peer-checked:right-0
                        peer-checked:left-auto
                        bg-black
                        dark:bg-gray-800"></div>
                </span>
                <span className="material-symbols-outlined text-black dark:text-gray-100">dark_mode</span>
            </label>
        </div>
    );
}