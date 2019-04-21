export const createLike = (post_id) => {
    return(
        $.ajax({
            method: "POST",
            url: "/api/likes",
            data: { post_id }
        })
    )
}

export const removeLike = (post_id) => {
    
    return(
        $.ajax({
            method: "DELETE",
            url: `api/likes/delete`,
            data: { post_id }
        })
    )
}