import Field from "../molecules/Field";
import Button from "../atoms/Button";
import './SectionLogin.css'
import Title from "../atoms/Title";
import { useState } from "react";
import SubTitle from "../atoms/Subtitle";
function SectionLogin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState('');
    const handleRegister = (event) => {
        if(!username.trim() || !password.trim() || !email.trim()){
            Swal.fire({
                icon: "info",
                title: "Please",
                text: "Fill out all fields!",
              });
        }
        
    }
    return (<>
   
        <div className="login_section">
            <img className="img_decoration" src="decoration.png" alt="" />
            <Title title="Carnitas Noyola"></Title>
            <SubTitle subTitle={"Ya estas registrado. Inicia sesion aquí."}/>

            <Field id="email" type="email" placeholder="ej. jesus@" text="Por favor ingresa tu email:" 
            val={email} fnVal={setEmail}
            />
            <Field id="user" type="text" placeholder="ej. jesuscast" text="Por favor ingresa tu nombre ch:" 
            val={username} fnVal={setUsername}
            />

            <Field id="password" type="password" placeholder="* * * * *" text="Ingresa tu contraseña" 
            val={password} fnVal={setPassword}
            
            />
            <div>
            <Button text={"Create account"} onClick={handleRegister}
             />
             </div>
            <img className="img_decoration" src="decoration_lu.png" alt="" />
        </div> 
        </>
     );
}

export default SectionLogin;