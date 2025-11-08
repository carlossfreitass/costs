import styles from './Container.module.css'

function Container(props) {
    return (
        // Realiza um estilo dinâmico baseado em props
        <div className={`${styles.container} ${styles[props.customClass]}`}>
            {/* Faz com que os elementos filhos do Container sejam renderizados */}
            {props.children}
        </div>
    )
}

export default Container