export const deletePost = (id) => {
    return {
        type: 'Delete_POST',
        id
    }
}

export const addPost = () => {
    return {
        type: 'Add_POST',
        id: Math.random()
    }
}