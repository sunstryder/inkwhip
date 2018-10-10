import React from 'react'
import { connect } from 'react-redux'
import * as contentful from 'contentful'
import BlogItem from './blog/BlogItem';
import PageHeader from './components/PageHeader'
import PageContent from './components/PageContent'
import { Loader } from './components/Loader';

//TODO: potentially add scrollreveal.js for improved look and feel
class Blog extends React.Component{

    render() {
        return (
            <div>
                <PageHeader color="is-info" title="Code Blog">
                Your standard <strong>JavaScript</strong> programming blog, albeit, probably not very good, but I will at least try to keep it entertaining. This blog is a chronological mix of random posts on Angular, React, Functional Programming, and my <strong>project walkthroughs</strong>
                </PageHeader>
                { this.props.blog.loading 
                    ? <Loader className="has-text-primary"></Loader>
                    : <PageContent>
                        { this.props.blog.posts.map(({fields}, i) =>
                            <BlogItem key={i} {...fields} />
                        )}
                    </PageContent>
                }
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        blog: state.blog
    }
}


export default connect(mapStateToProps)(Blog)
