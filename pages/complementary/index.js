import React, { useState } from 'react'
import styles from '../../styles/Complementary.module.css'
import TitleOfPage from '../../components/TitleOfPage';
import Layout from '../../components/Layout';
import Head from 'next/head';


export default function Complementary() {
    const [seqInput, setSequenceInput] = useState('')
    const [compSeq, setCompSeq] = useState('')
    const [type, settype] = useState('DNA')
    const [outtype, setOuttype] = useState('reverse')


    const typehandle = (e) => {
        settype(e.target.value)
    }
    const outtypehandle = (e) => {
        setOuttype(e.target.value)
    }
    const complementarySubmit = () => {

        if (outtype == 'reverse') {
            setCompSeq(seqInput.toUpperCase().split("").reverse().join(""))
            return
        }
        let tempComp = ''
        if (type === 'DNA') {
            for (let i = 0; i < seqInput.length; i++) {
                if (seqInput[i].toUpperCase() === 'A') {
                    tempComp = tempComp + 'T'
                } else if (seqInput[i].toUpperCase() === 'T') {
                    tempComp = tempComp + 'A'
                } else if (seqInput[i].toUpperCase() === 'G') {
                    tempComp = tempComp + 'C'
                } else if (seqInput[i].toUpperCase() === 'C') {
                    tempComp = tempComp + 'G'
                }
                else {
                    return setCompSeq('Please! Enter valid DNA sequence.')
                }
            }
        }

        if (type === 'RNA') {
            for (let i = 0; i < seqInput.length; i++) {
                if (seqInput[i].toUpperCase() === 'A') {
                    tempComp = tempComp + 'U'
                } else if (seqInput[i].toUpperCase() === 'U') {
                    tempComp = tempComp + 'A'
                } else if (seqInput[i].toUpperCase() === 'G') {
                    tempComp = tempComp + 'C'
                } else if (seqInput[i].toUpperCase() === 'C') {
                    tempComp = tempComp + 'G'
                }
                else {
                    return setCompSeq('Please! Enter valid RNA sequence.')
                }
            }
        }
        if (outtype == 'comp') {
            setCompSeq(tempComp)
            return
        } else if (outtype == 'reversecomp') {
            setCompSeq(tempComp.split("").reverse().join(""))
            return
        }
    }
    return (
        <>
                <Head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8417097523419752"
     crossOrigin="anonymous"></script>
        </Head>
        <div className={styles.top}>
            <Layout titleText={'COMPLEMENTARY'} />
            <div className={styles.complementary}>
                <div className="comp__bottom">
                    <form className={styles.complementary__form}>
                        <label htmlFor="seqinput" className={styles.label}>Enter sequence- </label>
                        <textarea name="" id='seqinput' className={styles.txtArea}
                            placeholder='Enter DNA/RNA sequence'
                            value={seqInput.toUpperCase()}
                            onChange={(e) => setSequenceInput(e.target.value)}
                            ></textarea>
                        <label style={{ marginBottom: '20px' }}>------ Options ------</label>
                        <span className={styles.seqoption}>
                            <label className={styles.sc}>Type - </label>
                            <label htmlFor="comp__dna">
                                <input type="radio" name="type" id="comp__dna" value="DNA" checked={type == 'DNA'} onChange={typehandle} />
                                <span>DNA</span>
                            </label>
                            <label htmlFor="comp__rna">
                                <input type="radio" name="type" id="comp__rna" value="RNA" checked={type == 'RNA'} onChange={typehandle} />
                                <span>RNA</span>
                            </label>
                        </span>
                        <span className={styles.seqoption} style={{ marginTop: '6px' }}>
                            <label className={styles.sc}>Output - </label>
                            <label htmlFor="reverse__type">
                                <input type="radio" name="outtype" id="reverse__type" value="reverse" checked={outtype == 'reverse'} onChange={outtypehandle} />
                                <span>Reverse</span>
                            </label>
                            <label htmlFor="comp__type">
                                <input type="radio" name="outtype" id="comp__type" value="comp" checked={outtype == 'comp'} onChange={outtypehandle} />
                                <span>Complementary</span>
                            </label>

                            <label htmlFor="reverseComp__type">
                                <input type="radio" name="outtype" id="reverseComp__type" value="reversecomp" checked={outtype == 'reversecomp'} onChange={outtypehandle} />
                                <span>reverse Complementary</span>
                            </label>
                        </span>
                        {seqInput ? <input type="button" className={styles.btn} value="hit hard" onClick={complementarySubmit} /> :
                            <input type="button" className={styles.btn} style={{ background: 'transparent', cursor: 'no-drop' }} value="hit hard" onClick={complementarySubmit} disabled />}

                    </form>
                </div>
                {compSeq && (<div className={styles.comp__bottomResult}>
                    <div>
                        <div className={styles.same}>
                            <p style={{ fontFamily: 'Roboto' }}>COMPLEMENTARY ➡️</p>
                            <textarea name="showResult" id="" className={styles.resultDisplay} value={compSeq} readOnly />
                        </div>
                    </div>
                </div>)}

            </div>
        </div>
                            </>
    )
}

