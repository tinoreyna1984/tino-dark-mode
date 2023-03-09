import { useLocalStorage } from "./useLocalStorage";

export function useTheme() {
    let theme = ((typeof window !== 'undefined') && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
    return useLocalStorage('color-theme', theme);
}