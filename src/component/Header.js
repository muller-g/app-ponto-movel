import styles from './Header.module.css'

function Header(){
    function handleClick(){
        alert("Você saiu")
    }
    return(
        <header className={styles.header}>
            <div className={styles.header_img}>
                <div className={styles.user_img}><img src="" alt="" srcset="" /></div>
            </div>
            <div className={styles.header_userName}>
                <span>Olá,</span>
                <span>Fulano de Tal</span>
                <span onClick={handleClick}>Sair</span>
            </div>
        </header>
    )
}

export default Header