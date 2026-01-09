import { useState } from 'react'
import styles from './Login.module.css'
import logo from '../../../assets/logo.png'

const Login = () => {
    const [signState, setSignState] = useState("Sign In")
    return (
        <div className={styles.login}>
            <img src={logo} alt="" className={styles.loginLogo} />
            <div className={styles.loginForm}>
                <h1>{signState}</h1>
                <form action="">
                    {signState === "Sign Up" ? <input type="text" placeholder='Your name' /> : <></>}
                    <input type="email" placeholder='Email' />
                    <input type="password" placeholder='Password' />
                    <button>Sign In</button>
                    <div className={styles.formHelp}>
                        <div className={styles.remember}>
                            <input type="checkbox" />
                            <label htmlFor="">Remember Me</label>
                        </div>
                        <p>Need Help?</p>
                    </div>
                </form>
                <div className={styles.formSwitch}>
                    {signState === "Sign In" ? <p>New to Netflix? <span onClick={() => { setSignState("Sign Up")}}>Sign Up Now</span></p> : <p>Already have account? <span onClick={() => {setSignState("Sign In")}}>Sign In Now</span></p>}
                </div>
            </div>
        </div>
    )
}

export default Login