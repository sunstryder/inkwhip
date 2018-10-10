import * as types from './types'

export function loadBlogSuccess(payload) {
    return { type: types.LOAD_BLOG_SUCCESS, payload} 
}
}