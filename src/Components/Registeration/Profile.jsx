import React from 'react'

const Profile = () => {
    return (
        <div className='Container'>
            <div className="path flex-ro justify-between mt-6">
                <p className="heading">Home / <span>My Account</span></p>
                <p>Wellcome! M Sahil</p>
            </div>
            <div className="profile-section mt-6">
                <div className="label-headings">
                    <div className="manage-profile">
                        <p className="profile-heading"> Manage My Account </p>
                        <div className="pro-subheading">
                            <p className="subeditoptions">My Profile</p>
                            <p className="subeditoptions">Address Book</p>
                            <p className="subeditoptions">My Payment Options</p>
                        </div>
                    </div>
                    <div className="manage-profile">
                        <p className="profile-heading"> My Orders</p>
                        <div className="pro-subheading">
                            <p className="subeditoptions">My Returns</p>
                            <p className="subeditoptions">My Collections</p>
                        </div>
                    </div>

                    <div className="manage-profile">
                        <p className="profile-heading"> My Wishlist</p>
                    </div>
                </div>
                <div className="edit-profile">
                    <p className='editproheading'>Edit your profile</p>
                    <form onSubmit={(e) => {
                        e.preventDefault()
                    }}>
                        <div className="smallinputs">
                            <div className='inputfield-box'>
                                <label htmlFor="inputfield">First Name</label>
                                <input className='inputfield' type="text" placeholder='First name' />
                            </div>
                            <div className='inputfield-box'>
                                <label htmlFor="inputfield">Last Name</label>
                                <input className='inputfield' type="text" placeholder='Last name' />
                            </div>
                            <div className='inputfield-box'>
                                <label htmlFor="inputfield">Email</label>
                                <input className='inputfield' type="text" placeholder='Email' />
                            </div>
                            <div className='inputfield-box'>
                                <label htmlFor="inputfield">Address</label>
                                <input className='inputfield' type="text" placeholder='Address' />
                            </div>
                        </div>
                        <div className="password-inputs">
                            <label htmlFor="">Password Change</label>
                            <input className='password-input' type="text" placeholder='old password' />
                            <input className='password-input' type="text" placeholder='new password' />
                            <input className='password-input' type="text" placeholder='rewrite passord' />
                        </div>
                        <div className="buttons-div">
                            <button className='cancel-btn'>Cancel</button>
                            <button className='Btn'>Save Changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Profile
