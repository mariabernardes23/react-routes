import { Link } from 'react-router-dom'
import './style.css'

export function NotFound() {
    return(
        <div>
            <section className='erro'>
                <h1 className='title'>404 - Página não encontrada</h1>
                <img src="src\assests\img\404.jpg" alt="Aqui"  className='img'/>
                <button className='button-home'><Link to='/' className='link'>Voltar Para Home</Link></button>
            </section>
        </div>
    )
}