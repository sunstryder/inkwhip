import * as types from './types'

export function loadBlogSuccess(payload) {
    return { type: types.LOAD_BLOG_SUCCESS, payload} 
}

export function blogLoading(payload = true) {
    return { type: types.BLOG_LOADING, payload} 
}