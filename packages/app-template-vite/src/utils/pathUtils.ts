export const handleActive = (href: string, pathname: string) => href === pathname;
export const isExample = (pathname: string): boolean => { return pathname.startsWith("/examples") };
