import fs from "node:fs";
import cors from "@/common/pages-api-cors";

const isDevelopment = process.env.NODE_ENV === "development";
const root = process.cwd().replaceAll("\\", "/");

const config = {
  test: "/components/exposes/test/index.js",
};

const getComponentCode = async ({ name }) => {
  const filePath = `${root}${config[name]}`;
  return await fs.promises.readFile(filePath, {
    encoding: "utf-8",
  });
};

export default async (req, res) => {
  try {
    await cors(req, res);
    const { name = "" } = req.query;
    if (name) {
      const code = await getComponentCode({ name });
      res.status(200).json({ success: true, data: { code } });
    } else {
      const components = [];
      for (const name of Object.keys(config)) {
        const code = await getComponentCode({ name });
        components.push({ framework: "react", code });
      }
      res.status(200).json({ success: true, data: { components } });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: isDevelopment ? err.stack : "something went wrong" });
  }
};
