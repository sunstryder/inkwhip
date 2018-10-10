import * as contentful from 'contentful'
import * as actions from './blog/actions'


// This is our thunk. It automatically passes dispatch into our functions
const client = contentful.createClient({
    space: 'mn2mx744b05i',
    accessToken: 'df99465aa62fc7cb6ccf6ddd1c01cb44c74c43cf13bd2c4e723177e73319b3a2'
})

const error = err => console.log(err)

// this calls to contentful, and passes the data from there into loadBlogSuccess action.
export function loadBlog() {
    return dispatch =>
    client.getEntries()
        .then(({items}) => {
            dispatch(actions.loadBlogSuccess(items))
        })
        .catch(error)
}