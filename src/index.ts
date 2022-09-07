// import { serve } from "https://deno.land/std@0.145.0/http/server.ts"

// const port = parseInt(Deno.env.get("PORT") ?? "8000")
// serve((req: Request) => fetch('http://analytics.do/event'),
//        { addr: `:${port}` })

import { serve } from "https://deno.land/std@0.114.0/http/server.ts"

 const port = parseInt(Deno.env.get("PORT") ?? "8000");
 serve(() => fetch('https://api.cf'),
       { addr: `:${port}` });

 console.log(`http://localhost:${port}/`);
