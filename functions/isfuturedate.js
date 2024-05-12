// function to validate due date
export default function isFutureDate(date) {
    return new Date(date) > new Date();
}