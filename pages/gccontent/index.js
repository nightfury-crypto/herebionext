import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import styles from '../../styles/gcContent.module.css'
import { IoWarning } from "react-icons/io5";
import Head from "next/head";

export default function gccontent() {

    const [seqInput, setSequenceInput] = useState('')
    const [gcCal, setgcCal] = useState(0)
    const [atCal, setatCal] = useState(0)
    const [inpError, setInpError] = useState('')

    useEffect(() => {
        let unsub = setTimeout(() => {
            setInpError('')
        }, 3000)

        return () => clearTimeout(unsub)
    }, [inpError])

    const contentcalculate = () => {
        let A = 0;
        let T = 0;
        let G = 0;
        let C = 0;

        for (let i = 0; i < seqInput.toUpperCase().length; i++) {
            if (seqInput[i].toUpperCase() == 'G') {
                G++
            } else if (seqInput[i].toUpperCase() == 'A') {
                A++
            } else if (seqInput[i].toUpperCase() == 'C') {
                C++
            } else if (seqInput[i].toUpperCase() == 'T') {
                T++
            } else {
                setInpError('Enter valid sequence')
                return
            }
        }
        let gc = G + C
        let at = A + T
        setgcCal((gc / seqInput.length) * 100)
        setatCal((at / seqInput.length) * 100)
    }
    return (
        <>
                <Head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8417097523419752"
     crossOrigin="anonymous"></script>
        </Head>
        <div className={styles.top}>
            <Layout titleText={'GC/AT CONTENT'} />
            <div className={styles.contentgc__bottom}>
                <form action="" className={styles.contentgc__form}>
                    <label htmlFor="seqinput" className={styles.label}>Enter Sequence - </label>
                    <textarea name="" id='seqinput' className={styles.txtArea}
                        cols="60" rows="10"
                        placeholder='Enter DNA sequence'
                        value={seqInput.toUpperCase()}
                        onChange={(e) => setSequenceInput(e.target.value)}
                    ></textarea>
                    {inpError && <div className={styles.showarning}><IoWarning size={20} />
                        <p className={styles.showarningText}>{inpError}</p></div>}
                        {seqInput ? <input type="button" className={styles.btn} value="hit hard" onClick={contentcalculate} /> :
                            <input type="button" className={styles.btn} style={{ background: 'transparent', cursor: 'no-drop' }} value="hit hard" onClick={contentcalculate} disabled />}
                </form>
            </div>

            {(gcCal || atCal) ? <div className={styles.bottomResult}>
                <table className={styles.table}>
                    <thead>

                        <tr>
                            <th>AT%</th>
                            <td>{String(atCal).substring(0, 5)}%</td>
                        </tr>
                    </thead>
                    <thead>

                        <tr>
                            <th>GC%</th>
                            <td>{String(gcCal).substring(0, 5)}%</td>
                        </tr>
                    </thead>
                </table>
            </div> : <></>}
        </div>
                            </>
    )
}