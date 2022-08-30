import { useEffect, useState } from "react"
import { Message } from "../../../common/message"
import { useGetMyRecipes } from "../../../hooks/useGetMyRecipes"
import { Card } from "./card"

const CardContainer = () => {
    const [message, setMessage] = useState()
    const { data, error, statusRequest } = useGetMyRecipes()

    useEffect(() => {
        if (error) {
            setMessage({ text: error, type: 'error' })
        }
    }, [error])
    console.log(data, statusRequest)
    return (
        <>
            <div>
                {message !== null && <Message message={message} callback={() => setMessage(null)} />}
                {data && data.recipes.map((recipe, index) =>
                    <Card key={index} recipe={recipe}></Card>
                )}
                {statusRequest === 'finished' && data.total === 0 ? 'no data' : ''}
            </div>
        </>
    )
}

export default CardContainer