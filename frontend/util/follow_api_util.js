
export const createFollow = (post) => {
    return (
        $.ajax({
            method: "POST",
            url: "/api/follows",
            data: { post }
        })
    )
}

export const removeFollow = (post) => {

    return (
        $.ajax({
            method: "DELETE",
            url: `api/follows/${post.id}`,
            data: { post }
        })
    )
}

