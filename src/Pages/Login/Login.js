import React from 'react'
import './Login.css'

class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            loggedIn: localStorage.getItem("loggedIn") || sessionStorage.getItem("loggedIn"),
            username: "",
            remember: false,
            password: ""
        }
    }

    handleLoginSubmit = (event) => {
        var xhr = new XMLHttpRequest()
        xhr.addEventListener('load', () => {
            var obj = JSON.parse(xhr.responseText)
            if (obj.status) {
                if (this.state.remember) {
                    localStorage.setItem("loggedIn", true)
                    localStorage.setItem("username", this.state.username)
                }
                else {
                    sessionStorage.setItem("loggedIn", true)
                    sessionStorage.setItem("username", this.state.username)
                }
                this.setState({ loggedIn: true })
            }

        })
        xhr.open('POST', 'http://192.168.1.106:3001/login')
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        var data = JSON.stringify({
            username: this.state.username,
            password: this.state.password,
        });
        xhr.send(data);

    }

    render() {
        return (
            (this.state.loggedIn) ?
                <div>
                    Giriş Yapıldı
                </div>
                :
                <div className="login">
                    <label>Kullanıcı Adı</label>
                    <input name="username" value={this.state.username} onChange={(e) => this.setState({ username: e.target.value })} />
                    <label>Şifre</label>
                    <input type="password" name="password" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} />
                    <label>Hatırla</label>
                    <input type="checkbox" value={this.state.remember} onChange={(e) => this.setState({ remember: !this.state.remember })} />
                    <input type="button" onClick={this.handleLoginSubmit} value="Giriş Yap" />
                </div>
        )
    }
}

export default Login