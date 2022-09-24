const ANSWER_KEY = "chosenScript";
const QUESTION_TYPE = "rawlist";
const SCRIPTIONS = "scriptions";
const SCRIPTS = "scripts";

import inquirer from "inquirer";
import { PackageJsonInfo, resolvePackageJson } from "./resolve-package-json.js";
import { QuestionCollection } from "inquirer";
import { execSync } from "child_process";

const { fullPathToPackageJson, packageJson } = resolvePackageJson();
const chooseScriptMessage = `FILE: ${fullPathToPackageJson}: 
 Choose the script you want to execute:`;
const answers = createAnswers(packageJson);
const whichScript = {
  type: QUESTION_TYPE,
  name: ANSWER_KEY,
  message: chooseScriptMessage,
  choices: answers,
};
const questionCollection: QuestionCollection = [whichScript];

(async () => {
  const { chosenScript } = await inquirer.prompt(questionCollection);
  console.log(chosenScript);
  //execSync(chosenScript, { stdio: ["inherit", "inherit", "inherit"] });
})();
function createAnswers(packageJson: PackageJsonInfo["packageJson"]) {
  if (
    !packageJson.hasOwnProperty(SCRIPTS) ||
    !packageJson.hasOwnProperty(SCRIPTIONS)
  ) {
    throw new Error(
      "package.json is missing the key value scripts or scriptions"
    );
  }
  let answers = [];
  for (let scriptKey in packageJson.scripts) {
    const scriptDescription = packageJson.scriptions[scriptKey];
    const scriptCommand = packageJson.scripts[scriptKey];
    const scriptInfo = `   Script: ${scriptCommand}
     Scription: ${scriptDescription}
          Name: ${scriptKey}`;
    answers.push(scriptInfo);
  }

  return answers;
}
