import React from 'react'
import * as contentful from 'contentful'
import BlogItem from './blog/BlogItem';
import PageHeader from './components/PageHeader'

class Blog extends React.Component{

    //initialise state to have empty posts
    state = {
        posts:[]
    }

    // TODO: move the space and access tokens into .env
    client = contentful.createClient({
        space: 'mn2mx744b05i',
        accessToken: 'df99465aa62fc7cb6ccf6ddd1c01cb44c74c43cf13bd2c4e723177e73319b3a2'
    })

    // 1. after components mount, get entries from contentful and fill them into the state.
    componentDidMount() {
        this.fetchPosts().then(this.setPosts);
    }

    // 2. get entries from the contentful space defined above.
    fetchPosts = () => this.client.getEntries()


    // 3. fill the state 'posts' with response items returned.
    setPosts = response => {
        this.setState({
            posts: response.items
        })
    }

    render() {
        return (
            <div>
                <PageHeader color="is-info" title="Code Blog">
                Your standard <strong>JavaScript</strong> programming blog, albeit, probably not very good, but I will at least try to keep it entertaining. This blog is a chronological mix of random posts on Angular, React, Functional Programming, and my <strong>project walkthroughs</strong>
                </PageHeader>
                <br/>
                { this.state.posts.map(({ fields }, i) =>
                    <BlogItem key={i}{...fields} />
                )}
            </div>
        )
    }

}
export default Blog
