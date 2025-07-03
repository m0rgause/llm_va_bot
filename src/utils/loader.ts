import fs from "fs";
import { color } from ".";

const getAllDirFiles = (dirPath: string, arrayOfFiles: string[]) => {
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];
  files.forEach((f) => {
    if (fs.statSync(dirPath + "/" + f).isDirectory()) {
      arrayOfFiles = getAllDirFiles(dirPath + "/" + f, arrayOfFiles);
    } else {
      arrayOfFiles.push(f);
    }
  });
  return arrayOfFiles;
};

const uncache = (module = ".") => {
  return new Promise<void>((resolve, reject) => {
    try {
      delete require.cache[require.resolve(module)];
      resolve();
    } catch (err) {
      reject(err);
    }
  });
};

const nocache = (module: string, call = (module: string) => {}) => {
  console.log(
    color("[WATCH]", "orange"),
    color(`=> '${module}'`, "yellow"),
    "file is now being watched by me!"
  );
  fs.watchFile(require.resolve(module), async () => {
    await uncache(require.resolve(module));
    call(module);
  });
};

export { getAllDirFiles, uncache, nocache };
