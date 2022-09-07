// import { serve } from "https://deno.land/std@0.145.0/http/server.ts"

// const port = parseInt(Deno.env.get("PORT") ?? "8000")
// serve((req: Request) => fetch('http://analytics.do/event'),
//        { addr: `:${port}` })

import { serve } from "https://deno.land/std@0.114.0/http/server.ts"

 const headers = { 'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.6.1 Safari/605.1.15' }
 const port = parseInt(Deno.env.get("PORT") ?? "8000");
 serve(() => fetch('https://api.cf',{headers}),
       { addr: `:${port}` });

 console.log(`http://localhost:${port}/`);
