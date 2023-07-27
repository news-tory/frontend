import { Border } from './style';
import { Inputs } from './style';


function Login() {
    return (
        <Border>
            <h2>LogIn</h2>
            <Inputs>
                <p>E-mail</p>
                <input placeholder='enter your email adress'></input>
                <p>Password</p>
                <input placeholder='enter your password'></input>
            </Inputs>
            <button>Login</button>
            <div className='tosignup'>
                <p>not a member yet?</p>
                <p className='signup'>Signup</p>
            </div>
        </Border>
    );
};

export default Login;