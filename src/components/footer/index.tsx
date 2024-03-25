import "./style.css"
import { Instagram } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Camera } from 'lucide-react'
export function Footer() {
    return(
        <>
            <footer className="footer">
                <section className="information">
                    <p>Todos os direitos reservados</p>
                    <span>
                        <Instagram size={28} className="social-network"/>
                        <Facebook size={28} className="social-network"/>
                        <Twitter size={28} className="social-network"/>
                    </span>
                </section> 
            </footer>
        </>
    )
}