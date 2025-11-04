import { CSSProperties } from 'react';
import { Link } from 'react-router';

type Variant = 'orange' | 'black' | 'transparent';

interface ButtonProps{
    variant?: Variant;

        part: string;
}
function Button({variant = 'orange',part}: ButtonProps){
    const styles: Record<Variant, CSSProperties> = {
        orange : {
            backgroundColor: "#D87D4A",
            color: "white",
        },
        black: {
             backgroundColor: "black",
             color: "white"
        },
        transparent: {
            backgroundColor: "transparent",
        }
    }
    return(
        <Link to={part}><button style={styles[variant]}>SEE PRODUCT</button></Link>
    )
}
export default Button;