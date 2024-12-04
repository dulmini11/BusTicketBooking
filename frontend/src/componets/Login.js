import "./Login.css";


import user_icon from '../componets/images/user.png'
import email_icon from '../componets/images/email.png'
import Password_icon from '../componets/images/key.png'

function Login() {

    
    return (

        <div className="container-L">
            <div className="header-L">
                <div className="text-L">Login</div>
                <div className="underline-L"></div>
            </div>

            <div className="inputs-L">

                <div className="input-L">
                    <img src={user_icon} alt=" user icon" className="icon-L"/>
                    <input type="text" placeholder="Name"/>
                </div>
                <div className="input-L">
                    <img src={email_icon} alt=" email icon" className="icon-L"/>
                    <input type="email" placeholder="Email Address"/>
                </div>
                <div className="input-L">
                    <img src={Password_icon} alt=" password icon" className="icon-L"/>
                    <input type="passwoed" placeholder="Password" />
                </div>
            </div>
            <div className="submit-container-L">
                <div className="submit-L">Login</div>
            </div>
        </div>
        

    );
  }
  
  export default Login;
  
  