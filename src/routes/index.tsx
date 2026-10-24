import { createFileRoute, redirect } from "@tanstack/react-router";

// The store is plain HTML/CSS/JS served from public/elite.
export const Route = createFileRoute("/")({
  beforeLoad: () => {
    throw redirect({ href: "/elite/index.html" });
  },
  head: () => ({
    meta: [
      { title: "ELITE GAME STORE — Simulador de Compras" },
      { name: "description", content: "Loja gamer fictícia com simulador de compras." },
      { property: "og:title", content: "ELITE GAME STORE" },
      { property: "og:description", content: "Equipe-se para a vitória. Jogue em outro nível." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});
