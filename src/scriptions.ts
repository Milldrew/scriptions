const ANSWER_KEY = "rawChosenScriptString";
const QUESTION_TYPE = "rawlist";
const SCRIPTIONS = "scriptions";
const SCRIPTS = "scripts";

import inquirer from "inquirer";
import { PackageJsonInfo, resolvePackageJson } from "./resolve-package-json.js";
import { QuestionCollection } from "inquirer";
import { spawn } from "child_process";

const { fullPathToPackageJson, packageJson } = resolvePackageJson();
if (!packageJson.hasOwnProperty(SCRIPTS)) {
  console.error(
    "Your package.json file",
    fullPathToPackageJson,
    "has no scripts! Add some scripts to your scripts objects and some descriptions of the scripts in your scriptions object on your package.json"
  );
} else {
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
    const { rawChosenScriptString } = await inquirer.prompt(questionCollection);
    const chosenScriptArray = rawChosenScriptString.split(":");
    const chosenScriptArrayLength = chosenScriptArray.length;
    const chosenScriptKey =
      chosenScriptArray[chosenScriptArrayLength - 1].trim();
    console.log(packageJson.scripts[chosenScriptKey]);
    spawn("npm", ["run", chosenScriptKey], {
      stdio: ["inherit", "inherit", "inherit"],
    });
  })();
  function createAnswers(packageJson: PackageJsonInfo["packageJson"]) {
    if (
      !packageJson.hasOwnProperty(SCRIPTS) ||
      !packageJson.hasOwnProperty(SCRIPTIONS)
    ) {
      console.error(
        "PLEASE make sure {scripts, scriptions} are in your package.json!"
      );
      if (!packageJson.hasOwnProperty(SCRIPTIONS)) {
        packageJson.scriptions = {};
      }
    }
    let answers = [];
    for (let scriptKey in packageJson.scripts) {
      const scriptDescription =
        packageJson.scriptions[scriptKey] || "No scription given";
      const scriptCommand = packageJson.scripts[scriptKey];
      const scriptInfo = `Script: ${scriptCommand} Scription: ${scriptDescription} Name: ${scriptKey}`;
      answers.push(scriptInfo);
    }

    return answers;
  }
}
