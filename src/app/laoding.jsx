import { Spin } from 'antd'
import React from 'react'

function laoding() {
    return (
        <div className='flex items-center justify-center min-h-screen'>
            <Spin></Spin>
        </div>
    )
}

export default laoding