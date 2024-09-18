import { ThemeProps } from "@/types/theme";
import { useRouteLoaderData } from "react-router-dom";

export function HomePage() {
  const theme = useRouteLoaderData("root") as ThemeProps;

  return (
    <main className="flex flex-col bg-on_primary_container_color relative h-screen overflow-hidden">
      <img
        src={theme.image}
        alt="icon"
        className="rounded-lg absolute"
        style={{ zIndex: 0 }}
      />
      <section className="flex flex-col gap-4 items-center absolute w-full p-4">
        <h1 className="text-5xl font-bold text-text">{theme.page_title}</h1>
        <div className="flex gap-4 p-2 border-2 rounded-lg justify-center items-center border-primary">
          <img src={theme.icon} alt="icon" className="size-24 rounded-lg" />
        </div>

        <button className="p-4 rounded w-fit px-20 bg-secondary font-semibold text-text hover:bg-primary hover:text-textSecondary transition">
          Botão
        </button>
      </section>
    </main>
  );
}
