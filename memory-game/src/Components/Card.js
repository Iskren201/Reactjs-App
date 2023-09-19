const Card = ({ item, id, handleClick }) => {
    const itemClas = item.stat ? " active " + item.stat : "";
    return (
        <div className={"card" + itemClas} onClick={() => handleClick(id)}>
            <img src={item.img} />
        </div>
    )
};

export default Card;