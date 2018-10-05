import React from 'react'
import PageContent from '../components/PageContent'
import BlogNav from './shared/BlogNav'
import BlogContent from './shared/BlogContent'


const BlogPost = ({ location: { state: { props } }}) => (
        <PageContent>
            <BlogNav status={props.status} date={props.date} to="/blog" label="Back to Blog"/>
            <BlogContent {...props}/>
        </PageContent>
)

export default BlogPost
