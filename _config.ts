import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";
import minifyHTML from "lume/plugins/minify_html.ts";

const site = lume({
    src: "./src",
    dest: "./dest"
});

site.ignore("README.md");

site.use(jsx())
    .use(tailwindcss({
        extensions: [".html", ".jsx"]
    }))
    .use(postcss())
    .use(minifyHTML());

site.copy("favicon.ico");

export default site;
