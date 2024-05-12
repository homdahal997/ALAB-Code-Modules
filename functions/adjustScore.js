
export default function(score, submissionDate, dueDate) {
    // convert score to number
    score = Number(score);
    // If the score is not a number, log an error and return 0
    if (isNaN(score)) {
        console.error("Score is not a number");
        return 0;
    }

    // If the submission date is later than the due date, deduct 10% from the score
    if (new Date(submissionDate) > new Date(dueDate)) {
        return score - score * 0.1;
    }

    // If the submission date is not later than the due date, return the original score
    return score;
}