import { useEffect, useState } from 'react'

interface DataProps {
    label: string;
    knownAs: string;
    image: string;
}
interface HintsProps {
    hints: DataProps[];
}

export function Produto() {
    const [food, setFood] = useState<DataProps[]>([])

    useEffect(() => {
        function getFood() {
            fetch('https://api.edamam.com/api/food-database/v2/parser?app_id=9eac306d&app_key=085fe1bec89b6fad168286e2d7cc4422&nutrition-type=cooking')
            .then(response => response.json())
            .then((data: HintsProps) => {
                setFood(data.hints)
                // console.log(data.hints[0].food);
                console.log(food);
                
            })
            .catch((err) => {
                console.log(err);   
            })
        }
        getFood();
    })

    return(
        <div>
            <h1 className='title'>Página de Produtos</h1>
            <hr />
            
            {
                food.map((item) => (
                    <div>
                        <p>{item.food}</p>
                    </div>
                ))
            }
        </div>
    )
}