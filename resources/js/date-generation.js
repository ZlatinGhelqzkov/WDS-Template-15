function generateDatesForYear(year) {
    let dates = [];
    let date = new Date(year, 0, 1); // Start at January 1st of the given year

    while (date.getFullYear() === year) {
        // Push a string representation of the current date to the array
        dates.push(date.toISOString().split('T')[0]);
        // Increment the date by one day
        date.setDate(date.getDate() + 1);
    }

    return dates;
}