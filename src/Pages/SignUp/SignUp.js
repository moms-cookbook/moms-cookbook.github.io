import React from 'react';
import './SignUp.css'

class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            mail: "",
            password: "",
        }
    }
    submit = () => {
        var xhr = new XMLHttpRequest()
        xhr.addEventListener('load', () => {
            console.log(xhr.responseText)
        })
        xhr.open('POST', 'http://192.168.1.106:3001/signup')
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        var data = JSON.stringify({
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
        });
        console.log(data);
        xhr.send(data);
    }
    render() {
        return (
            <div className="sign-up">
                <div className="labell">
                    <label>Boşlukları doldurun ve ekleye tıklayın.</label>
                </div>
                <label>Kullanıcı Adı</label>
                <input name="username" value={this.state.username} onChange={(e) => this.setState({ username: e.target.value })} />
                <label>E-posta</label>
                <input name="email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                <label>Şifre</label>
                <input type="password" name="password" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} />


                <button onClick={this.submit}>Ekle</button>
            </div>
        )
    }

}

export default SignUp