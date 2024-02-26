import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
  ],
  styles: [`body { margin: 0; }`],
  npmClient: 'pnpm',
});
