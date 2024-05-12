# ALAB 308A.5.1: Code Modules

# Project: Modularizing Pre-existing Code

This project aims to modularize pre-existing code for better organization and future use. We will be using pre-existing code from previous projects and reorganize them into module files.

## Getting Started

The starting point for this project is [this repository](https://github.com/homdahal997/SBA-JavaScript-fundamentals).

## Modularizing Code

In this project, we have modularized the `app.js` file by breaking it down into several functions. These functions are `isFutureDate.js`, `adjustScore.js`, `initializeLearner.js`, and `getLearnerData.js`. 

The first three functions (`isFutureDate.js`, `adjustScore.js`, `initializeLearner.js`) utilize default export and are imported into the `getLearnerData.js` file. 

Following this, the `getLearnerData.js` file, which also uses default export, is imported back into the `app.js` file to run the program. 

Through this process, we have achieved a modularized program that is cleaner and easier to maintain.
