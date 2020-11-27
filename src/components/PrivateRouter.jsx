import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import UserKit from '../data/UserKit'

export default function PrivateRouter({ component: Component, ...rest }) {
    const userKit = new UserKit();

    return (
        <Route {...rest} render={props => {
            return userKit.getToken() ? <Component {...props} />
                : <Redirect to="/login" />
        }} />
    )
}
