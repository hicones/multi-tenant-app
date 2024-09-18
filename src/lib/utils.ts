export const ThemeLoader = async (pathname: string) => {
  if (!pathname) pathname = "tema1";

  try {
    const themeData = await import(`@/assets/themes/${pathname}.json`);

    const variables = themeData.payload?.variables;

    const root = document.documentElement;

    Object.keys(variables).forEach((key) => {
      root.style.setProperty(`--${key}`, variables[key]);
    });

    return variables;
  } catch (error) {
    console.error("Erro ao carregar o tema:", error);
    return null;
  }
};
