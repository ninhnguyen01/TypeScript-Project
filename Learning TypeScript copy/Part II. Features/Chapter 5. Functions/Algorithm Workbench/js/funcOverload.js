// Warning
// Function overloads are generally used as a last resort for complex, difficult-to-describe function types. It’s generally better to keep functions simple and avoid using function overloads when possible.
function createDate(monthOrTimestamp, day, year) {
    return day === undefined || year === undefined
        ? new Date(monthOrTimestamp)
        : new Date(year, monthOrTimestamp, day);
}
createDate(554356800); // Ok
createDate(7, 27, 1987); // Ok
