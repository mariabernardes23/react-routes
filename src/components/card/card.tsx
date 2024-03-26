import { addDoc, collection } from "firebase/firestore";
import { CardBody, CardButton, CardContainer, CardImg, CardTitle } from "../style-componentns/card/style";
import { db } from "../../services/firebaseConnection";
interface CardProps {
    imageUrl: string;
    title: string;
    text: string;
    buttonText: string;
    buttonUrl: string;
}

const Card: React.FC<CardProps> = ({imageUrl, title, text, buttonText, buttonUrl}) => {
    function handleBookmark() {
        alert("Favoritouuuu!")
        addDoc(collection(db, 'bookmarks'), {
            item: title,
            bookmarkedAt: new Date()
        })
        .then(() => {
            console.log('SALVOU COM SUCESSO!!!');  
        })
        .catch((error) => {
            console.log('HOUVE UM ERRO AO FAVORITAR', error);
        })
    }

    return(
        <>
            <CardContainer>
                <CardImg src={imageUrl} />
                <CardBody>
                    <CardTitle>{title}</CardTitle> 
                    <CardTitle>{text}</CardTitle>
                    <CardButton url={buttonUrl}>{buttonText}</CardButton>
                    <CardButton onClick={handleBookmark}>Favotitar</CardButton>
                </CardBody>
            </CardContainer>
            {/* <button 
                type="button" 
                onClick={handleBookmark}>Favoritar</button> */}
        </>
    )
}

export default Card;