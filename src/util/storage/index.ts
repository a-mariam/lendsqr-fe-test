export const setItemSessionStorage = (name: string, item: string) => {
    if (typeof window !== 'undefined') {
        sessionStorage.setItem(name, item)
    }
}


export const getItemSessionStorage = (name: string): string | undefined => {
    if (typeof window !== 'undefined') {
        return sessionStorage.getItem(name) ?? undefined;
    }
    return undefined;
};