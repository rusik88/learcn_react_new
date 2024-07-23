import {NavLink, useNavigate, useParams} from "react-router-dom";
import courses from "../../data/courses";
import {useEffect} from "react";


function Course() {
    const {slug} = useParams()
    let course = null
    course = courses.find((item) => item.slug === slug)
    const navigate = useNavigate()

    useEffect(() => {
        if(!course) {
            navigate('..', {relative: 'path'})
        }
    }, [course, navigate])

    return (
        <div className="course">
            {course !== undefined && (
                <>
                    <h1>{course.title}</h1>
                </>
            )}
            <div><NavLink to=".." relative="path">Go to all courses</NavLink></div>
        </div>
    )
}

export default Course