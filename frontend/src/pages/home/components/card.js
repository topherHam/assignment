import useFormatedSeconds from "../../../hooks/useFormatedDate"

export const Card = ({recipe}) => {
    const value = useFormatedSeconds(recipe.timeCooking)
    return (
        <section className="card">
            <div>
                <h4>Title: {recipe.title}</h4>
                
            </div>
            <div>
                <small>Time Cooking: {value}</small>
            </div>
            <div>
                <label>Description</label>
                <p id="descriotionId">
                    {recipe.description}
                </p>
            </div>
        </section>
    )
}