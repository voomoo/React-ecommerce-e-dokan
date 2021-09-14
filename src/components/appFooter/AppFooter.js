import React from 'react'
import { Layout } from 'antd'
import "./appFooter.css"

const { Footer } = Layout;

const AppFooter = () => {
    return (
        <Footer className="app__footer">
            <h4>This Will be our footer</h4>
        </Footer>
    )
}

export default AppFooter
