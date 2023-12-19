import { type PageProps } from "$fresh/server.ts";
import { Partial } from "$fresh/runtime.ts";

export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>fresh-fun</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body f-client-nav>
        <nav>
          <ul class="flex gap-4 p-4">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/yolo">Yolo</a>
            </li>
          </ul>
        </nav>
        <Partial name="body">
          <Component />
        </Partial>
      </body>
    </html>
  );
}
