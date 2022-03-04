import Header from '../component/Header'
import Timer from '../component/Timer'
import EnterTime from '../component/EnterTime'
import styles from './Home.module.css'

function Home(){
    return(
        <div className={styles.home_container}>
            <Header />
            <div className={styles.home_body}>
                <Timer />
                <EnterTime value="Entrada manhã" time="08:00"/>
                <EnterTime value="Entrada manhã" time="08:00"/>
                <EnterTime value="Entrada manhã" time="08:00"/>
                <EnterTime value="Entrada manhã" time="08:00"/>
            </div>
        </div>
    )
}

export default Home