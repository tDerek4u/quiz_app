import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue"; //add this line
import laravel from "laravel-vite-plugin";

export default defineConfig({
    plugins: [
        vue({
            template: {
                CompilerOptions: {

                },
                transformAssetUrls: {
                    
                }
            }
        }), // write this
        laravel({
            input: ["resources/css/app.scss", "resources/js/app.js"],
            refresh: true,
        }),
    ],
});