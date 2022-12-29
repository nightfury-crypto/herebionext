import styles from '../styles/TitleOfPage.module.css'

export default function TitleOfPage({titleText}) {
    return (
        <div className={styles.title}>
            <h2>{titleText}</h2>
        </div>
    )
}