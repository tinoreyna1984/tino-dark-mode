import { useLocalStorage } from "./useLocalStorage";

export function useTheme() {
    return useLocalStorage('color-theme', 'light');
}