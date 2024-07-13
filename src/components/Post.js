function Post({userId, id, title, body}) {
    return (
        <div className="post">
            <h1>{title}</h1>
            <h3>UserId: {userId}</h3>
            <h3>CardId: {id}</h3>
            <p>{body}</p>
        </div>
    )
}

export default Post