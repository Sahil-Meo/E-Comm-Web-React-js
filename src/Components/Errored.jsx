import React from 'react'

const Errored = () => {
    return (
        <div>
            <div className="path mt-6">
                <p>Home / 404error</p>
            </div>
            <div className="error-container">
                <p className="error-heading-text">
                    404 Not Found
                </p>
                <p className="error-sub-heading">Your visit page not found-You may go home page</p>
                <div className='button-box'>
                    <a className='Btn a-sec ' href="#">Back to to home</a>
                </div>
            </div>
        </div>
    )
}

export default Errored
