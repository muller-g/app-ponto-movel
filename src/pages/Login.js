import Input from '../component/Input'
import ALink from '../component/ALink'
import styles from './Login.module.css'

function Login(){
    return(
        <div className={styles.login_container}>
            <div className={styles.container_form}>
                <span>Entrar</span>
                <form action="#" className={styles.form}>
                    <Input type="text" name="username" id="username" placeholder="Usuário"/>
                    <Input type="password" name="password" id="password" placeholder="Senha"/>
                    <Input type="submit" name="submit" id="submit" value="Logar"/>
                    <ALink href="#" value="Esqueceu sua senha?"/>
                </form>
            </div>
        </div>
    )
}
export default Login