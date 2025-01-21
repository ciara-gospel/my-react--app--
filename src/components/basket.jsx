function Basket ({basket}) {
    return (
        <div className="basket">
            {basket.map((item) => (
                <div className="basket-item">
                    <h5>{item.name}</h5>
                    <p>{item.quantity}</p>
                </div>
            ))}
        </div>
    )
}

export default Basket