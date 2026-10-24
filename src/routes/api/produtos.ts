import { createFileRoute } from "@tanstack/react-router";
import { produtos } from "@/lib/simulacao";

export const Route = createFileRoute("/api/produtos")({
  server: { handlers: { GET: async () => Response.json({ produtos }) } },
});
