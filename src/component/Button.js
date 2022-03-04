import styles from './Button.module.css'

function Button({value}){
    function handleClick(e){
        alert("Horário Cadastrado!")
        e.target.parentNode.style.backgroundColor =  "#1A924A";
    }
    return(<button onClick={(e) => handleClick(e)} className={styles.button}>{value}</button>)
}

export default Button