import React from 'react'
import BlogNav from './shared/BlogNav'
import BlogContent from './shared/BlogContent'

const BlogItem = (props) => {
    return (
        <div className="box">
            <BlogContent limit={150} { ...props }>
                <BlogNav
                    label="Read More"
                    status={props.status}
                    date={props.date}
                    to={{
                        pathname: `/blog/${props.path}`,
                        state: { props }
                    }}
                />
            </BlogContent>
        </div>
    )
}

export default BlogItem