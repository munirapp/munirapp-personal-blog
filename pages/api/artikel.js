import fs from "fs";
import matter from "gray-matter";
import path from "path";

export default (req, res) => {
  let listPortofolio = [];
  let counter = 0;
  const fileList = fs.readdirSync("data/portofolio");
  fileList.forEach((file) => {
    const id = counter;
    const parsedMarkdown = matter(
      fs.readFileSync(path.join("data/portofolio", file))
    );
    const { image, title, year, desc, website } = parsedMarkdown.data;
    const role = parsedMarkdown.data.role.split(",");
    const stack = parsedMarkdown.data.stack.split(",");
    listPortofolio.push({ id, image, title, year, desc, website, role, stack });
    counter++;
  });
  res.end(JSON.stringify(listPortofolio));
};
