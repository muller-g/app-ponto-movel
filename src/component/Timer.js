import styles from './Timer.module.css'

function Timer(){
    return(
        <div className={styles.timer_container}>
            <p>14:48</p>
            <p>Sexta-feira, 4 de março</p>
        </div>
    )
}

export default Timer