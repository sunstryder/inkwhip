import React from 'react'
import PageHeader from './components/PageHeader'
import PageContent from './components/PageContent'
import axios from 'axios'

class Medium extends React.Component {

    state = {
        posts: []
    }

    componentDidMount() {
        this.fetchPosts().then(this.setPosts)
    }

    // This will be blocked by CORS. INCOMPLETE
    // Add error or loading messaging
    fetchPosts = () => axios.get(`https://cors.now.sh/https://us-central1-aaronklaser-1.cloudfunctions.net/medium?username=@sunstryder`)

    setPosts = response => {
        this.setState({
            posts: response
        })
    }

    render() {
        return (
            <div>
                <PageHeader color="is-dark" title="Medium">
                    Medium is a place to write the things i want you to read.
                    <br/><br/>
                    <a
                        className="button is-inverted is-outlined"
                        href="https://medium.com/@sunstryder"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View my Medium
                        <span
                            className="icon"
                            style={{ marginLeft: 5 }}
                        >
                            <i className="fab fa-lg fa-medium"></i>
                        </span>
                    </a>
                </PageHeader>
                <PageContent>
                    <pre>{JSON.stringify(this.state.posts, null, 2)}</pre>
                </PageContent>
            </div>
        )
    }
}

export default Medium