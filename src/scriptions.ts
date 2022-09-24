const QUESTION_TYPE = "rawlist";
const SCRIPTS = "scripts";
const SCRIPTIONS = "scriptions";
import { PackageJsonInfo, resolvePackageJson } from "./resolve-package-json.js";
const { fullPathToPackageJson, packageJson } = resolvePackageJson();
import inquirer from "inquirer";
import { QuestionCollection } from "inquirer";
const MESSAGE = `Choose a script from the package.json file located
  ${fullPathToPackageJson}`;
createAnswers(packageJson);
const QUESTION_1 = {
  type: QUESTION_TYPE,
  name: "chosenScript",
  message: MESSAGE,
  choices: [`answer1`, `answer1`, `answer1`, `answer1`],
};
const QUESTION_COLLECTION: QuestionCollection = [QUESTION_1];

(async () => {
  const payLoad = await inquirer.prompt(QUESTION_COLLECTION);
  console.log({ payLoad });
})();
function createAnswers(packageJson: PackageJsonInfo["packageJson"]) {
  if (
    packageJson.hasOwnProperty(SCRIPTS) &&
    packageJson.hasOwnProperty(SCRIPTIONS)
  ) {
    console.log(packageJson.scripts);
    console.log(packageJson.scriptions);
  } else {
    throw new Error(
      "package.json is missing the key value scripts or scriptions"
    );
  }
  let answers = [];
  for (let scriptKey in packageJson.scripts) {
    answers.push(packageJson.scripts[scriptKey]);
  }
  return answers;
}
