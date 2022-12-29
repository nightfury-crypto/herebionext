import { useState } from "react";
import styles from "../styles/Nav.module.css"
import Link from 'next/link';
import { BsFillArrowDownCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import { GiHamburgerMenu, GiTireIronCross, GiCrossedBones } from "react-icons/gi";

export default function Nav() {

    const [isOpened, setIsOpened] = useState(false)
    const [showservices, setShowServices] = useState(false)
    return (
        <div className={styles.nav}>
            <div className={styles.hamburger} onClick={() => setIsOpened(!isOpened)}>
                {isOpened ? <GiCrossedBones size={26} onClick={() => setIsOpened(!isOpened)} />
                    : <GiHamburgerMenu size={26} onClick={() => setIsOpened(!isOpened)} />}
            </div>
            {isOpened && <div className={styles.wrapper}>
                <div className={styles.navbar}>
                    <ul>
                        <Link href="/"><li>Home</li></Link>
                        <li onClick={() => setShowServices(!showservices)}>
                            <div className={styles.servicebar}>
                                <span>services</span>
                                {showservices ? <BsFillArrowDownCircleFill /> : <BsFillArrowRightCircleFill />}
                            </div>
                            {showservices && <ul style={{opacity: showservices ? 1: 0, height: showservices ? 'fit-content' : '0px'}} className={styles.serviceslist}>
                                <Link href="/complementary" passHref><li>complementary</li></Link>
                                <Link href="/gccontent" passHref><li>GC/AT Content</li></Link>
                            </ul>}
                        </li>
                        <Link href="/contactme"><li>Contact Me</li></Link>
                    </ul>
                </div>
            </div>}
        </div>
    )
}