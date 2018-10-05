import React from 'react'
import PageContent from '../components/PageContent'
import BlogNav from './shared/BlogNav'
import BlogContent from './shared/BlogContent'


const BlogPost = ({ location: { state: { props } }}) => (
        <PageContent>
            <BlogNav date={props.date} to="/blog"/>
            <BlogContent {...props}/>
        </PageContent>
)

export default BlogPost
