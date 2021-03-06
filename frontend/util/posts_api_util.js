
export const showAllPosts = () => {
    return (
        $.ajax({
            method: "GET",
            url: "/api/posts"
        })
    )
}

export const showPost = (id) => {
    return (
        $.ajax({
            method: "GET",
            url: `/api/posts/${id}`
        })
    )
}

export const createPost = (post) => {
    return (
        $.ajax({
            method: "POST",
            url: `/api/posts`,
            data: { post }
        })
    )
}

export const createImagePost = (formData) => {
    
    return (
        $.ajax({
            method: "POST",
            url: `/api/posts`,
            data: formData,
            contentType: false,
            processData: false
        })
    )
};

export const editPost = (post) => {
    return (
        $.ajax({
            method: "PATCH",
            url: `/api/posts/${post.id}`,
            data: { post }
        })
    )
}
export const deletePost = (id) => {
    return (
        $.ajax({
            method: "DELETE",
            url: `/api/posts/${id}`,

        })
    )
}


export const fetchShowPosts = (id) => {
    return (
        $.ajax({
            method: "GET",
            url: `api/users/${id}`
        })
    )
}