import { useEffect, useState } from 'react'
import { Message } from '../../../common/message'
import { useGetMyRecipes } from '../../../hooks'
import { Card } from './card'

const CardContainer = () => {
    const [message, setMessage] = useState()
    const { data, error, statusRequest,nextPage, backPage } = useGetMyRecipes()

    useEffect(() => {
        if (error) setMessage({ text: error, type: 'error' })
    }, [error])

    const renderPagination = ()=>{
        if(data.total > 0 && data.recipes.length === 0){
            return<button onClick={backPage}>back</button>
        }
        if(data.total > 10){
            return <><button onClick={backPage}>back</button> <button onClick={nextPage}>next</button></>
        }
        if(data.total < 10){
            return <button onClick={nextPage}>next</button>
        }
    }
    return (
        <>
            <h3>Your recipes</h3>
            <div className='cardContainer'>
                {message !== null && <Message message={message} callback={() => setMessage(null)} />}
                {data && data.recipes.map((recipe, index) =>
                    <Card key={index} recipe={recipe}></Card>
                )}
                {statusRequest === 'finished' && !error && data.recipes.length === 0 ? <div className='data-error'>No recipes</div> : ''}
            </div>
            {data.total  > 0 && renderPagination() }
        </>
    )
}

export default CardContainer