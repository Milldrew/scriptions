import { readFileSync } from "fs";
import { join } from "path";
import { resolvePackageJson } from "./resolve-package-json.js";
console.log(resolvePackageJson());

/*
  *
import inquirer from "inquirer";
import { QuestionCollection } from "inquirer";
const QUESTION_1 = {
  type: "list",
  name: "name",
  message: "message",
  choices: [
    `1 
    hello
    line breaks`,
    "2,",
    "3",
  ],
};
const QUESTION_COLLECTION: QuestionCollection = [QUESTION_1];

(async () => {
  console.log("hello iif");
  const answers = await inquirer.prompt(QUESTION_COLLECTION);
})();
*/
