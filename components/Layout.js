import Nav from "./Nav";
import TitleOfPage from "./TitleOfPage";
import styles from '../styles/Layout.module.css'

export default function Layout({ titleText }) {
    return (
        <>
            {titleText ? (<div className={styles.sectiontop} >
                <TitleOfPage titleText={titleText} />
                <Nav />
            </div >) :
                <div className={styles.sectiontop} style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
                    <Nav />
                </div>}
        </>
    )
}