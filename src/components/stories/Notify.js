import React from 'react'
import Notify from '../ui/Notify'

export default () => {
    return (
        <React.Fragment>
            <h1 className="book-title">Notify</h1>

            <p className="book-paragraph">Notifies divided into types: Admin and Client. Admin notfies used in admin app, Client in general app. Type notify indicate into 'area' property. Below Admin Success notify</p>
            <Notify options={{
            	area: 'admin',
            	type: 'success',
            	message: 'Document successful created'
            }} />

            <p className="book-paragraph">Admin Warning notify</p>
            <Notify options={{
            	area: 'admin',
            	type: 'warning',
            	message: 'Neccessary filled all fileds'
            }} />

            <p className="book-paragraph">Admin Error notify</p>
            <Notify options={{
            	area: 'admin',
            	type: 'error',
            	message: 'Server error'
            }} />
        </React.Fragment>
    )
}