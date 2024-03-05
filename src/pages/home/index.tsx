import Card from '../../components/card/card';
import bdImg from '../../assests/img/images.png';

export function Home() {
    const cardData = {
        imageUrl: bdImg,
        title: 'Titulo Card',
        text: 'Texto que aparece no corpo de card',
        buttonText: 'Ver detalhes',
        buttonUrl: '#'
    }

    return(
        <div>    
            <h1>Bem-vindos a página home</h1>

            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Sit beatae ea quo voluptas consequatur, fugiat blanditiis repellat 
            quis eius eaque, quibusdam voluptates autem in. Accusantium eligendi expedita 
            facilis in corporis.</p>

            <Card {...cardData}/>
            <Card {...cardData}/>
            <Card {...cardData}/>
        </div>
    )
}