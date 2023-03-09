import express from 'express'
import {
    createPost,
    deletePost,
    getAllPost,
    showPost,
    updatePost,
} from '../controllers/post.controllers.js'

const router = express.Router()

router.route('/').get(getAllPost)
router.route('/:id').get(showPost)
router.route('/admin/Posts').post(createPost)
router.route('/admin/Posts/:id').delete(deletePost).patch(updatePost)
export default router
