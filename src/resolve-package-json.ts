type PackageJsonInfo = {
  packageJson: object;
  fullPathToPackageJson: string;
};
const PACKAGE_JSON = "package.json";
import { readdirSync, readFileSync } from "fs";
export function resolvePackageJson(): PackageJsonInfo {
  const pathToCwd = process.cwd();
  const dirContent = readdirSync(pathToCwd);
  if (dirContent.includes(PACKAGE_JSON)) {
    return handleFile(`${pathToCwd}/${PACKAGE_JSON}`);
  }
  const arrayOfDir = process.cwd().split("/");
  arrayOfDir.pop();
  while (arrayOfDir.length > 0) {
    const newDirPath = arrayOfDir.join("/");
    const nextDirContent = readdirSync(newDirPath);
    if (nextDirContent.includes(PACKAGE_JSON)) {
      return handleFile(`${newDirPath}/${PACKAGE_JSON}`);
    }
    arrayOfDir.pop();
  }
  throw new Error("Could not resolve a packgae.json file");
}

function handleFile(filePath: string) {
  return {
    packageJson: JSON.parse(readFileSync(filePath).toString()),
    fullPathToPackageJson: filePath,
  };
}
