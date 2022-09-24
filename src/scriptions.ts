import inquirer from "inquirer";
import { QuestionCollection } from "inquirer";
const QUESTION_COLLECTION: QuestionCollection = [
  "question 1",
  "question 2",
  "question 2",
  "question 2",
];

(async () => {
  console.log("hello iif");
  const answers = await inquirer.prompt(QUESTION_COLLECTION);
})();
