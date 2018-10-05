import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import StatusTag from '../../components/StatusTag';

const BlogNav = ({ to, date, label, status }) => (
    <nav className="level">
        <div className="level-left">
            <Link
                className="level-item button is-small is-link is-outlined"
                to={to}
            >
                {label}
            </Link>
        </div>
        <div className="level-right">
            <StatusTag status={status}/>
            <p className="level-item has-text-link is-size-7">
                {moment(date).calendar(null, {
                    sameDay: '[Today]',
                    lastDay: '[Yesterday]',
                    lastWeek: '[Last] dddd',
                    sameElse: 'MMM Do YYYY'
                })}
            </p>
        </div>
    </nav>
)

export default BlogNav
