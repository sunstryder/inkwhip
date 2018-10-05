import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

// child components
import Site from './layout/Site'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Content from './layout/Content'
import Router from './layout/Router'

const Layout = ({ children }) => (
    <Site>
        <Helmet
            title="inkwhip"
            meta={[
                { name: 'description', content: 'A place for Tony\'s poorly edited writing'},
                { name: 'keywords', content: 'blog, resume, portfolio, tony sun, sunstryder, developer'}
            ]}
            script={[
                {'src': 'https://use.fontawesome.com/releases/v5.0.4/js/all.js'}
            ]}
            link={[
                {'rel': 'stylesheet', 'href': 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'}
            ]}
        />
        <Header />
        <Content>
            <Router />
        </Content>
        <Footer />
    </Site>
)

Layout.propTypes = {
    children: PropTypes.func,
}

export default Layout