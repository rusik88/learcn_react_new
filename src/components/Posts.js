import Post from "./Post";
import {useEffect, useState} from "react";

function Posts() {
    const [posts, setPosts] = useState(null)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        /*const fetchData = async () => {
            try {
                const postsData =  await fetch('https://jsonplaceholder.typicode.com/posts')
                const data = await postsData.json()
                setPosts(data)
            } catch(e) {
                console.log(e.message)
            }
        }
        fetchData()*/
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((data) => {
                setPosts(data)
            })
            .catch((e) => {
                setError(e.message)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    if(error) {
        return (<h1>Error: {error}</h1>)
    }


    return (
        <>
            <div className="postsHeadBlock">
                <h1>Posts</h1>
                <hr />
            </div>
            {!loading ? (
                <div className="postsBlock">
                    {!loading && (
                        posts.map((item) => {
                            return (<Post key={item.id} {...item} />)
                        })
                    )}
                </div>
            ) : (
                <h1>Loading...</h1>
            )}
        </>

    )
}

export default Posts