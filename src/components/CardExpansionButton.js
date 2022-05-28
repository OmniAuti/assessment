const CardExpansionButton = ({handleCardExpansion, cardExpansion}) => {
    return <button onClick={handleCardExpansion} className="expansion-btn">{cardExpansion ? '-' : '+'}</button>
}

export default CardExpansionButton;