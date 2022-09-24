var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const ANSWER_KEY = "chosenScript";
const QUESTION_TYPE = "rawlist";
const SCRIPTIONS = "scriptions";
const SCRIPTS = "scripts";
import inquirer from "inquirer";
import { resolvePackageJson } from "./resolve-package-json.js";
import { execSync } from "child_process";
const { fullPathToPackageJson, packageJson } = resolvePackageJson();
const chooseScriptMessage = `Choose a script from the package.json file located
${fullPathToPackageJson}`;
const answers = createAnswers(packageJson);
const whichScript = {
    type: QUESTION_TYPE,
    name: ANSWER_KEY,
    message: chooseScriptMessage,
    choices: answers,
};
const questionCollection = [whichScript];
(() => __awaiter(void 0, void 0, void 0, function* () {
    const { chosenScript } = yield inquirer.prompt(questionCollection);
    execSync(chosenScript, { stdio: ["inherit", "inherit", "inherit"] });
}))();
function createAnswers(packageJson) {
    if (packageJson.hasOwnProperty(SCRIPTS) &&
        packageJson.hasOwnProperty(SCRIPTIONS)) {
        console.log(packageJson.scripts);
        console.log(packageJson.scriptions);
    }
    else {
        throw new Error("package.json is missing the key value scripts or scriptions");
    }
    let answers = [];
    for (let scriptKey in packageJson.scripts) {
        answers.push(packageJson.scripts[scriptKey]);
    }
    return answers;
}
//# sourceMappingURL=scriptions.js.map