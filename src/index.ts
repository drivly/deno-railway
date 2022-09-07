import { serve } from "https://deno.land/std@0.145.0/http/server.ts"

const port = parseInt(Deno.env.get("PORT") ?? "8000")
serve((req: Request) => fetch('http://analytics.do/event'),
       { addr: `:${port}` }))
