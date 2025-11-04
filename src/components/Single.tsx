
function Single(props:any){
    return <div className="singles">
        <picture>
        <source srcSet={props.deskimg} media='(min-width: 900px)'/>
        <img className="pics" src={props.img} alt={props.al}/>
        </picture>
        <h3>{props.item}</h3>
        <div>SHOP  <img src="../assets/shared/desktop/icon-arrow-right.svg" alt="" /></div>
    </div>
}

export default Single;