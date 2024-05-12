import isFutureDate from "./isfuturedate.js";
import adjustScore from "./adjustScore.js";
import initializeLearner from "./initializeLearner.js";
// main function to process learners submissions
export default function getLearnerData(course, ag, submissions) {
    // Check if course id matches with assignment group'S course id
    try {
        if (course.id !== ag.course_id) {
            console.error("Mismatching course_id in AssignmentGroup");
            return [];
        }
        // Initialize learners object
        let learners = {};
        // Iterate over each submission
        for (let submission of submissions) {
            // Extract learnerId, assignmentId and score from learners Submission
            let learnerId = submission.learner_id;
            let assignmentId = submission.assignment_id;
            let score = submission.submission.score;

            // Find the corresponding assignment in the assignment group
            let assignment = ag.assignments.find((a) => a.id === assignmentId); // check if id prop of obj 'a' is equal to assignmentId

            // check if assignment due date is a future date, if so ignore it.
            if (isFutureDate(assignment.due_at)) {
                continue;
            }

            // Calculate the adjusted score for the assignment. The score is adjusted based on the submission date and the due date of the assignment.
            let adjustedScore = adjustScore(score, submission.submission.submitted_at, assignment.due_at);

            // If learner with the given learner Id not present,
            // initialize a new learner object and add to learners object.
            if (!learners[learnerId]) {
                learners[learnerId] = initializeLearner(learnerId);
            }

            // Convert the points_possible to number data .
            let pointsPossible = Number(assignment.points_possible);

            // Check if possible point is zero or NaN.
            if (isNaN(pointsPossible) || pointsPossible === 0) {
                // If it is, log show error and continue.
                console.error("Invalid points_possible value");
                continue;
            }

            // get total score for learner with given learnerId.
            learners[learnerId].totalScore += adjustedScore;

            // Add point possible for current assignment to totalPossible.
            learners[learnerId].totalPossible += pointsPossible;

            // Individual score for learner in each assignment
            learners[learnerId].assignments[assignmentId] = score / pointsPossible;
        }
        // Map over the values of learners object
        return Object.values(learners).map((learner) => {
            // validate possible point if zero
            if (learner.totalPossible === 0) {
                console.error("Total possible points for a learner is zero");
                // in the case of zero, set larner avg to 0
                learner.avg = 0;
            } else {
                // if not calculat lerners average
                learner.avg = learner.totalScore / learner.totalPossible;
            }
            // return 
            return learner;
        });
    } catch (error) {
        console.error("An error occurred while processing the learner data: ", error);
        return [];
    }
}// end getLearnerData Function