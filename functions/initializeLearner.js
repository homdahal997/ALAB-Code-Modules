// Function to initialize a new learner object
export default function initializeLearner(learnerId) {
    return {
        id: learnerId, // ID of the learner
        totalScore: 0, // total score of the learner
        totalPossible: 0, // total possible points the learner can earn
        assignments: {}, // object to store the assignments of learner
    };
}
