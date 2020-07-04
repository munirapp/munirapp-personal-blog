import fs from "fs";
import matter from "gray-matter";
import path from "path";

export default (req, res) => {
  let listArtikel = [];
  let counter = 0;
  const fileList = fs.readdirSync("data/artikel").reverse();
  fileList.forEach((file) => {
    const id = counter;
    const parsedMarkdown = matter(
      fs.readFileSync(path.join("data/artikel", file))
    );
    const { title, slug, image, date, desc, author } = parsedMarkdown.data;
    const link = `blog/${date}-${slug}`;
    listArtikel.push({ id, title, slug, image, date, desc, author, link });
    counter++;
  });
  res.send(listArtikel);
};
