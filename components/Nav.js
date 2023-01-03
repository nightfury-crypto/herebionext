import { useRef, useState } from "react";
import styles from "../styles/Nav.module.css"
import Link from 'next/link';
import { BsFillArrowDownCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import { GiHamburgerMenu, GiCrossedBones } from "react-icons/gi";

export default function Nav() {

    const [isOpened, setIsOpened] = useState(false)
    const [showservices, setShowServices] = useState(false)
    const [showsequencing, setShowSequencing] = useState(false)

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
                        <li>
                            <div className={styles.servicebar}>
                                <span>Services</span>
                                {/* <BsFillArrowDownCircleFill /> */}
                            </div>
                            <ul className={styles.serviceslist}>
                                <Link href="/complementary" passHref><li>COMPLEMENTARY</li></Link>
                                <Link href="/gccontent" passHref><li>GC/AT Content</li></Link>
                                <li onClick={() => setShowSequencing(!showsequencing)}>
                                    <div className={styles.servicebar} style={{width: '100%'}}>
                                        <span>Sequencing</span>
                                        {showsequencing ? <BsFillArrowDownCircleFill /> : <BsFillArrowRightCircleFill />}
                                    </div>
                                    {showsequencing && <ul className={styles.serviceslist}>
                                        <Link href="/sequencing/sanger" passHref><li>SANGER</li></Link>
                                    </ul>}
                                </li>
                            </ul>
                        </li>
                        <Link href="/contactme"><li>Contact Me</li></Link>
                    </ul>
                </div>
            </div>}
        </div>
    )
}