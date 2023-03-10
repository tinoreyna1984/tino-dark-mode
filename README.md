# Dark mode with Next.js + TailwindCSS + next-themes

## Features

It's a pretty simple landing page that has a dark mode toggle button.

## Installation

Use the following commands:

```bash
# Clone from GitHub repo:
git clone https://github.com/tinoreyna1984/tino-dark-mode

# Install the project and its addons
npm i

# Run locally
npm run dev
```
## Extended documentation

### How to create this project from zero

1. Create the project: npx create-next-app

2. Install Tailwind and its dependencies:
```bash
npm i -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

3. Configure the main CSS file (globals.css, styles.css, etc)
   Main CSS file:

```CSS
@tailwind base;
@tailwind components;
@tailwind utilities;
```

4. On tailwind.config.js, add content directive to enable all JS/TS files can use the Tailwind framework:

```JavaScript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ // <----------- add content
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // <----------- for dark mode manual toggle
  theme: {
    extend: {},
  },
  plugins: [],
}
```
5. Run: npm run dev and start trying the Tailwind utility classes.


### Develop the dark mode feature

1. Install next-themes:
```bash
npm i next-themes
```

2. In _app.js file, place the ThemeProvider wrapper around Component:

```JavaScript
import Navbar from "../components/navbar"
import "../styles/globals.css"
import { ThemeProvider } from "next-themes"

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider enableSystem={false} attribute="class">
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
```

3. Customize your components using the "dark" class in every className: e.g. dark:bg-gray-800

4. Whatever your dark mode toggle button component may be created, make sure you are developing this way:

```JavaScript
import { useTheme } from "next-themes";
import { useEffect } from "react";

export default function DarkModeButton() {
    const themeApi = useTheme()
    const { theme, setTheme } = themeApi;

    useEffect(() => { /* <========= if you set the theme as dark, the value should be checked */
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
```

5. Voilà! You have your project with the dark mode feature already working.



## Deployment

Easily at Vercel.
