import db from "../config/connection.js";
import Question from "../models/Question.js";
import cleanDB from "./cleanDb.js";
import pythonQuestions from './pythonQuestions.json' assert { type: "json" };

db?.once('open', async () => {
  try {
    // Ensure cleanDB execution with optional chaining or error handling
    await cleanDB?.('Question', 'questions');
    await Question.insertMany(pythonQuestions);

    console.log('Questions seeded!');
  } catch (error) {
    console.error('Error seeding questions:', error);
  } finally {
    process.exit(0);
  }
});
