import fs from "fs";
import matter from "gray-matter";
import path from "path";

export default (req, res) => {
  let listPortofolio = [];
  const fileList = fs.readdirSync("data/portofolio");
  fileList.forEach((file) => {
    const parsedMarkdown = matter(
      fs.readFileSync(path.join("data/portofolio", file))
    );
    const { image, title, year, desc, website } = parsedMarkdown.data;
    const role = parsedMarkdown.data.role.split(",");
    const stack = parsedMarkdown.data.stack.split(",");
    listPortofolio.push({ image, title, year, desc, website, role, stack });
  });
  res.end(JSON.stringify(listPortofolio));
};
