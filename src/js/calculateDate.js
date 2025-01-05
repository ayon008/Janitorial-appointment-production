function getDateDifference(givenDateStr) {
    const givenDate = new Date(givenDateStr);
    const currentDate = new Date();

    // Calculate the difference in time (milliseconds)
    const timeDifference = givenDate.getTime() - currentDate.getTime();

    // Convert milliseconds to days and ensure no negative sign
    const daysDifference = Math.abs(Math.floor(timeDifference / (1000 * 60 * 60 * 24)));

    // Calculate the difference in months and ensure no negative sign
    let monthsDifference = Math.abs((givenDate.getFullYear() - currentDate.getFullYear()) * 12);
    monthsDifference += Math.abs(givenDate.getMonth() - currentDate.getMonth());
    return `Posted ${monthsDifference > 0 ? `${monthsDifference} months and` : ''} ${daysDifference} days ago`;

}

export default getDateDifference;