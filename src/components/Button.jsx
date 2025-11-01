function Button({variant = 'orange'}){
    const styles = {
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
        <button style={styles[variant]}>SEE PRODUCT</button>
    )
}
export default Button;