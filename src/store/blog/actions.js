import * as types from './types'

export function loadBlogSuccess(post) {
    return { type: types.LOAD_BLOG_SUCCESS, post}
}