import { createFileRoute } from "@tanstack/react-router";
import { simular, ErroValidacao } from "@/lib/simulacao";

export const Route = createFileRoute("/api/compras/simular")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let corpo: unknown;
        try { corpo = await request.json(); } catch { return Response.json({ erro: "JSON inválido." }, { status: 400 }); }
        try { return Response.json(simular(corpo)); }
        catch (e) {
          if (e instanceof ErroValidacao) return Response.json({ erro: e.message }, { status: e.status });
          return Response.json({ erro: "Erro interno do servidor." }, { status: 500 });
        }
      },
    },
  },
});
