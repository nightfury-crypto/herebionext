import { useState } from "react";
import Layout from "../../components/Layout";
import Nav from "../../components/Nav";
import TitleOfPage from "../../components/TitleOfPage";
import styles from '../../styles/gcContent.module.css'

export default function gccontent() {

    const [seqInput, setSequenceInput] = useState('')
    const [gcCal, setgcCal] = useState(0)
    const [atCal, setatCal] = useState(0)

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
                alert('Enter valid sequence')
                return
            }
        }
        let gc = G + C
        let at = A + T
        setgcCal((gc / seqInput.length) * 100)
        setatCal((at / seqInput.length) * 100)
    }
    return (
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
                    <input type="button" className={styles.comp__btn} value="hit hard" onClick={contentcalculate} />
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
    )
}