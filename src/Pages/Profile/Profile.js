import React from 'react';
import { Link } from 'react-router-dom';

import './Profile.css'

class Profile extends React.Component {
    render() {
        return (
            <div className="profile" >
                <div className="profile-username">
                    <h1>Kullanıcı Adı</h1>
                </div>
                <div className="profile-image">
                    Resim
                </div>
                <div className="profile-about">
                    <label>dsflsdöcbgfhd</label>
                </div>
                <Link to="./addrecipe">Yemek tarifi eklemek için tıklayınız.</Link>
            </div>
        );
    }
}

export default Profile