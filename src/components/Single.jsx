function Single(props){
    return <div className="singles">
        <img className="pics" src={props.img} alt={props.al}/>
        <h3>{props.item}</h3>
        <div>SHOP  <img src="../assets/shared/desktop/icon-arrow-right.svg" alt="" /></div>
    </div>
}

export default Single;