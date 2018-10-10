// This updates our state, where our data is stored.

import initialState from '../../store/initialState'
import * as types from './types'

export default function blogReducer(state = initialState.blog, action) {
    switch (action.type) {
        case types.LOAD_BLOG_SUCCESS:
            return {
                ...state,
                posts: action.payload
            }
        default:
            return state
    }
}