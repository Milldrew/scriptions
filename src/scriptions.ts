import { execSync } from "child_process";
const ANSWER_KEY = "chosenScript";
const QUESTION_TYPE = "rawlist";
const SCRIPTS = "scripts";
const SCRIPTIONS = "scriptions";
import { PackageJsonInfo, resolvePackageJson } from "./resolve-package-json.js";
const { fullPathToPackageJson, packageJson } = resolvePackageJson();
import inquirer from "inquirer";
import { QuestionCollection } from "inquirer";
const MESSAGE = `Choose a script from the package.json file located
  ${fullPathToPackageJson}`;
const ANSWERS = createAnswers(packageJson);
const WHICH_SCRIPT_DO_YOU_WANT_TO_RUN = {
  type: QUESTION_TYPE,
  name: ANSWER_KEY,
  message: MESSAGE,
  choices: ANSWERS,
};
const QUESTION_COLLECTION: QuestionCollection = [
  WHICH_SCRIPT_DO_YOU_WANT_TO_RUN,
];

(async () => {
  const { chosenScript } = await inquirer.prompt(QUESTION_COLLECTION);
  execSync(chosenScript, { stdio: ["inherit", "inherit", "inherit"] });
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
