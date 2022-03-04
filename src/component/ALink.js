import styles from './ALink.module.css'

function ALink({href, value}){
    return(
        <a href={href}>{value}</a>
    )
}

export default ALink;