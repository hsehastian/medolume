import lume from "lume/mod.ts";

const site = lume({
    src: "./src",
    dest: "./dest"
});

site.ignore("README.md");

export default site;
