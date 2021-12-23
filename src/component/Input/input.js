import  React, {useState} from 'react';
import validator from 'validator';
import './App.css';

function Input() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState('Invalid Email');
  const [password, setPass] = useState("");
  const [passwordError, setPassError] = useState('Please Fill the password');
  const [user, setUser] = useState("");
  const [userError, setUserError] = useState('Please Fill the column');
  const [print, setPrint] = useState(false);
  const [printE, setPrintE] = useState(false);
  const [printP, setPrintP] = useState(false);
  function emailOnChange(val) {
    setEmail(val.target.value);
    if(val.target.value == "test@gmail.com") {
      setPrintE('');
    }else if(validator.isEmail(email)) {
        setEmailError('');
    }else {
      setEmailError("Invalid Email");
    }
    
  }
  function passOnChange(val) {
    setPass(val.target.value);
      var pass = val.target.value;
      var vStrong = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/
      var weak = /(?=.*[a-z])/;
      var strong = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{5,7})/;
      var good = /(?=.*[a-z])(?=.*[A-Z])/;
      if (vStrong.test(pass)) {
        setPassError('Password is Very Strong');
      }else if (strong.test(pass)) {
        setPassError('Password is Strong');
      }else if (good.test(pass)) {
        setPassError('Password is Good');
      }else if(validator.isEmail(pass)) {
        setPassError('Password is Good');
      }else if (weak.test(pass)) {
        setPassError('Password is Weak');
      }
  }
  function userOnChange(val) {
    setUser(val.target.value);    
    if(user != '') {
      setUserError('');
      
    }else{
      setUserError('Please Fill the column');
      setPrint('');
    }
  }
  function findError() {
    setPrint(true);
    setPrintE(false);
    setPrintP(false);
  }
  function findEmailError() {
    setPrintE(true);
    setPrint(false);
    setPrintP(false);
  }
  function findPassError() {
    setPrintP(true);
    setPrintE(false);
    setPrint(false);
  }
  return(
    <div className="App">
      <h1>Dynamic Form</h1>
      <div id="form">
        <label>Enter your username</label>
        <div>
          <input type="text" onFocus={findError} onChange={userOnChange} data-testid="username"  placeholder="Please Enter your username"></input>         
          {
            print ? 
            <p data-testid= 'message'>{userError}</p>
            : ""
          }
        </div>
        <label>Enter your email</label>
        <div>
          <input type="email" onFocus={findEmailError} onChange={emailOnChange} data-testid="email" placeholder="Please Enter your email"></input>
          {
            printE ? 
            <p data-testid= 'message'>{emailError}</p>
            : ""
          }
        </div>
        <label>Enter your password</label>
        <div>
          <input type="password" onFocus={findPassError} onChange={passOnChange} data-testid="password" placeholder="Please Enter your password"></input>
          {
            printP ? 
            <p data-testid= 'message'>{passwordError}</p>
            : ""
          }
        </div>
      </div>
    </div>
  );
}
export default Input;
