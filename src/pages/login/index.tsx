import { FormEvent, useState } from "react";
import { Input } from "../../components/input";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebaseConnection";
import { useNavigate } from "react-router-dom";

export function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    
    function handleSubmit(e: FormEvent) {
        e.preventDefault()

        if(email === '' || password === '') {
            alert('Prencha todos os campos')
            return
        }
        
        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            console.log('LOGADO COM SUCESSO!')
            navigate('/produto', { replace: true})
        })
        .catch((error) => {
            console.log('ERRO AO FAZER LOGIN!');
            console.log(error);
        })
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <Input
                    placeholder="joao@silva.com"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                />

                <Input
                    placeholder="*******"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">Entrar</button>

            </form>
        </div>
    )
}