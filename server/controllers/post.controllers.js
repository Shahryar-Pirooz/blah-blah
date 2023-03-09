const createPost = async (req, res) => {
    res.send('create Post')
}
const deletePost = async (req, res) => {
    res.send('delete Post')
}
const getAllPost = async (req, res) => {
    res.send('get Post')
}

const showPost = async (req, res) => {
    res.send('show Post')
}
const updatePost = async (req, res) => {
    res.send('update Post')
}

export { createPost, deletePost, getAllPost, showPost, updatePost }
