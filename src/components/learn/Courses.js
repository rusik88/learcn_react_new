import {NavLink, useLocation, useNavigate} from "react-router-dom";
import styles from "./courses.module.css"
import queryString from "query-string";
import {useEffect, useState} from "react";
import coursesData from "../../data/courses";
import { sortCourses } from "../utils/sort"

function Courses() {
    const location = useLocation()
    const sort = queryString.parse(location.search)
    const navigate = useNavigate()

    console.log(location)

    const [sortKey, setSortKey] = useState(sort.sort)
    const [sortKeyArr] = useState(['title', 'slug', 'id'])

    const [courses, setCourses] = useState(
        sortKeyArr.includes(sortKey) ? sortCourses(sortKey, coursesData) : coursesData
    )

    useEffect(() => {
        if(sortKey !== undefined && !sortKeyArr.includes(sortKey)) {
            navigate('.')
            setSortKey('')
            setCourses(coursesData)
        }
    }, [sortKeyArr, sortKey, navigate])

    let sortText = ''

    if(sortKeyArr.includes(sortKey)) {
        sortText = `Sorted by ${sortKey}`
    }

    return (
        <>
            <h1>{sortText !== '' ? sortText : 'Courses'}</h1>
            <div className={styles.courses}>
                {courses.length > 0 &&
                    courses.map((course) => {
                        return (
                            <h3 key={course.id}><NavLink to={`${course.slug}`}>{course.title}</NavLink></h3>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Courses