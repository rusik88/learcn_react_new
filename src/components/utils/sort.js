function sortCourses(sort, coursesData) {
    return coursesData.sort((a, b) => a[sort] > b[sort] ? 1 : -1)
}

export { sortCourses }