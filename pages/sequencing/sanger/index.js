import { useEffect, useState } from "react";
import Layout from "../../../components/Layout.js";
import styles from '../../../styles/SangerSequencing.module.css'
import { IoWarning } from "react-icons/io5";
import { useRouter } from "next/router.js";

export default function SangerHome() {

    const [seqInput, setSequenceInput] = useState('')
    const [inpError, setInpError] = useState('')

    const router = useRouter();

    useEffect(() => {
        let unsub = setTimeout(() => {
            setInpError('')
        }, 3000)

        return () => clearTimeout(unsub)
    }, [inpError])

    const handlesanger = () => {
        if (seqInput) {
            let allnb = ['A', 'T', 'G', 'C']
            let tempset = new Set(seqInput.toUpperCase().split(""))
            for (const nb of tempset) {
                if (allnb.includes(nb) === false) {
                    return setInpError('Invalid DNA sequence.')
                }
            }

            router.push(router.pathname + '/' + seqInput.toUpperCase())

        } else {
            setInpError('Please enter the sequence.')
        }
    }

    return (
        <div className={styles.top}>
            <Layout titleText={'SANGER SEQUENCING'} />
            <div className={styles.sanger__bottom}>
                <form className={styles.sanger__form}>
                    <label htmlFor="seqinput" className={styles.label}>Enter Sequence - </label>
                    <textarea id='seqinput' className={styles.txtArea}
                        cols="60" rows="10"
                        placeholder='Enter DNA sequence'
                        value={seqInput.toUpperCase()}
                        onChange={(e) => setSequenceInput(e.target.value)} />
                    {inpError && <div className={styles.showarning}><IoWarning size={20} /><p className={styles.showarningText}>{inpError}</p></div>}
                    <input type="button" className={styles.btn} value="hit hard" onClick={handlesanger} />
                </form>
            </div>
        </div>
    )
}