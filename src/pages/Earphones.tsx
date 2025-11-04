import { Link } from "react-router-dom";
import Topic from "../components/Topic";

function Earphones(){
     return(<>
        <Topic topic='EARPHONES'/>

        <button><Link to='/checkout'>CHeckout</Link></button>
        </>
     )
}

export default Earphones;