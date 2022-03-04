import styles from './Input.module.css'

function Input({type, name, id, value, placeholder}){
    return(
        <input className={styles.input} type={type} name={name} id={id} value={value} placeholder={placeholder}/>
    )
}

export default Input;