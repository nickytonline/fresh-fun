import { PageProps } from "$fresh/server.ts";
import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const resp = await ctx.render();
    resp.headers.set("X-Custom-Header", "Hello");
    return resp;
  },
};

export default function Yolo() {
  return <p class="grid place-content-center">hello</p>;
}
