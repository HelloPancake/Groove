export const signUp = (user) => {
    return(
        $.ajax({
            method: "POST",
            url: "/api/users",
            data: {user}
            
        })
    )
}
export const logIn = (user) => {
    return(
        $.ajax({
            method: "POST",
            url: "/api/session",
            data: {user}
        })
    )
}
export const logOut = () => {
    return(
        $.ajax({
            method: "DELETE",
            url: `/api/session`
        })
    )
}

export const showAllPosts = () => {
    return(
        $.ajax({
            method: "GET",
            url: "/api/posts"
        })
    )
}

export const showPost = (id) => {
    return(
        $.ajax({
            method: "GET",
            url: `/api/posts/${id}`
        })
    )
}

export const createPost = (post) => {
    return(
        $.ajax({
            method: "POST",
            url: `/api/posts`,
            data: { post }
        })
    )
}

export const editPost = (post) => {
    return(
        $.ajax({
            method: "PATCH",
            url: `/api/posts/${post.id}`,
            data: { post }
        })
    )
}
export const deletePost = (id) => {
    return(
        $.ajax({
            method: "DELETE",
            url: `/api/posts/${id}`,
     
        })
    )
}



