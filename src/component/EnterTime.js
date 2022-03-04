import Button from './Button'
import styles from './EnterTime.module.css'

function EnterTime({value, time}){
    return(
        <div className={styles.enter_time}>
            <span>{value}</span>
            <span>{time}</span>
            <Button value="V"/>
        </div>
    )
}

export default EnterTime