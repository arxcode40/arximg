import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

export default defineConfig({
    base: "/arximg/",
    plugins: [preact()],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
});
