import { useEffect, useState } from "react";
import Layout from "../../../components/Layout.js";
import styles from '../../../styles/SangerSequencing.module.css'
import { useRouter } from "next/router.js";
import { BsFillArrowDownCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";


export default function SangerSequencing() {

    const router = useRouter()

    const [seq, setSeq] = useState('')
    const [rxnTubes, setRxnTubes] = useState(['ddATP', 'ddTTP', 'ddGTP', 'ddCTP'])
    const [ddATP, setddATP] = useState([])
    const [ddGTP, setddGTP] = useState([])
    const [ddTTP, setddTTP] = useState([])
    const [ddCTP, setddCTP] = useState([])
    const [showContent, setShowContent] = useState(false)
    const [boxes, setBoxes] = useState([])

    useEffect(() => {
        setSeq(router.query.seq)
    }, [seq, router.query.seq])

    useEffect(() => {
        if (seq) {
            countTotal({ compli: 'T', lst: ddATP, lstType: 'ddATP' })
            countTotal({ compli: 'A', lst: ddTTP, lstType: 'ddTTP' })
            countTotal({ compli: 'C', lst: ddGTP, lstType: 'ddGTP' })
            countTotal({ compli: 'G', lst: ddCTP, lstType: 'ddCTP' })
        }
    }, [seq])

    function bands({ n, compli, lstType }) {
        if (seq) {
            let seqtowork = seq
            let temarry = []
            let bandstr = '';
            let itemIndex = seqtowork.indexOf(compli)
            let seqDivide = 0
            for (let i = 0; i < n; i++) {
                for (let j = 0; j < seqtowork.length; j++) {
                    if (itemIndex > j) {
                        if (seqtowork[j] === 'A') {
                            bandstr += 'T';
                        } else if (seqtowork[j] === 'G') {
                            bandstr += 'C';
                        } else if (seqtowork[j] === 'C') {
                            bandstr += 'G';
                        } else if (seqtowork[j] === 'T') {
                            bandstr += 'A';
                        }
                    }
                    else {
                        if (compli === 'A') {
                            bandstr += 'T';
                        } else if (compli === 'G') {
                            bandstr += 'C';
                        } else if (compli === 'C') {
                            bandstr += 'G';
                        } else if (compli === 'T') {
                            bandstr += 'A';
                        }
                        temarry.push(bandstr)
                        bandstr = ''
                        break;
                    }
                }
                seqDivide = itemIndex + 1
                itemIndex = seqtowork.slice(seqDivide, seqtowork.length).indexOf(compli) + seqDivide
            }
            if (lstType === 'ddATP') {
                setddATP(temarry)
            } else if (lstType === 'ddTTP') {
                setddTTP(temarry)
            } else if (lstType === 'ddGTP') {
                setddGTP(temarry)
            } else {
                setddCTP(temarry)
            }

        }
    }


    function countTotal({ compli, lst, lstType }) {
        let n = 0
        for (let i = 0; i < seq.length; i++) {
            if (seq[i] === compli) {
                n++
            }
        }
        bands({ n: n, compli: compli, lst: lst, lstType: lstType })
    }

    useEffect(() => {
        let onelst = [...ddATP, ...ddCTP, ...ddGTP, ...ddTTP]
        onelst.sort((a, b) => a.length - b.length)
        if (onelst) {
            let highestband = onelst[onelst.length - 1]
            if (highestband) {
                let boxlst = []
                let highestbandlen = highestband?.length

                for (let j = highestbandlen + 1; j > 0; j--) {
                    for (let i = 0; i < 5; i++) {
                        if (i === 0 && j === highestbandlen + 1) {
                            boxlst.push(<div className={styles.box} key={`${i},${j}`} style={{ border: 0, backgroundColor: 'transparent' }}></div>)
                        }
                        else if (i === 0 && j >= 0) {
                            boxlst.push(<div className={styles.box} key={`${i},${j}`}
                                style={{ backgroundColor: 'transparent', justifyContent: 'flex-end', paddingRight: 6, fontSize: '0.9em', fontWeight: '700' }}>{`${j}`}</div>)
                        } else if (i > 0 && j === highestbandlen + 1) {
                            boxlst.push(<div className={styles.box} key={`${i},${j}`}
                                style={{ fontSize: '0.77em', border: 0, fontWeight: '600', backgroundColor: 'transparent' }} >{rxnTubes[i - 1]}</div>)
                        } else {
                            let yesband = false
                            for (let len = 0; len < onelst.length; len++) {
                                if (onelst[len].length === j) {
                                    if (onelst[len].slice(onelst[len].length - 1, onelst[len].length) === 'T' && i === 2) {
                                        yesband = true
                                        onelst.splice(len, 1)
                                        break
                                    } else if (onelst[len].slice(onelst[len].length - 1, onelst[len].length) === 'A' && i === 1) {
                                        yesband = true
                                        onelst.splice(len, 1)
                                        break
                                    } else if (onelst[len].slice(onelst[len].length - 1, onelst[len].length) === 'G' && i === 3) {
                                        yesband = true
                                        onelst.splice(len, 1)
                                        break
                                    } else if (onelst[len].slice(onelst[len].length - 1, onelst[len].length) === 'C' && i === 4) {
                                        yesband = true
                                        onelst.splice(len, 1)
                                        break
                                    }
                                }
                            }
                            boxlst.push(<div className={styles.box} style={{ color: '#f8f8f8' }} key={`${i},${j}`}>{yesband ? '--' : ''}</div>)
                            yesband = false
                        }
                    }
                }
                setBoxes(boxlst)
            }
        }
    }, [ddATP, ddCTP, ddGTP, ddTTP])

    return (
        <div className={styles.top}>
            <Layout titleText={'SANGER SEQUENCING'} />
            <div className={styles.sanger__bottom}>

                {/* sequence display */}
                <div className={styles.seqdisplay}>
                    <div onClick={() => setShowContent(!showContent)}>
                        <div className={styles.contenttitle}>
                            <span>SEQUENCE TO ANALYZE</span>
                            {showContent ? <BsFillArrowDownCircleFill /> : <BsFillArrowRightCircleFill />}
                        </div>
                        {showContent && <p>{seq}</p>}
                    </div>
                </div>

                <div className={styles.main}>
                    {/* ddNTPs fragments */}
                    <div className={styles.bandsdisplay}>
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            {/* ddATP */}
                            {rxnTubes?.map((tube, i) => <div className={styles.accordionitem} key={i}>
                                <h2 className="accordion-header" id={`flush-heading${i}`} >
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${i}`} aria-expanded="false" aria-controls={`flush-collapse${i}`} style={{ padding: 8, fontSize: '16px' }}>
                                        {tube}
                                    </button>
                                </h2>
                                <div id={`flush-collapse${i}`} className="accordion-collapse collapse" aria-labelledby={`flush-heading${i}`} data-bs-parent="#accordionFlushExample">
                                    <div className={styles.accordionbody}>
                                        <ul style={{ listStyleType: 'disc', fontSize: '13px', paddingTop: 5, paddingBottom: 5, marginBottom: 0 }}>
                                            {tube === "ddATP" && ddATP?.map((band, index) => <li key={index}>{band} --{band.length}</li>)}
                                            {tube === "ddTTP" && ddTTP?.map((band, index) => <li key={index}>{band} --{band.length}</li>)}
                                            {tube === "ddCTP" && ddCTP?.map((band, index) => <li key={index}>{band} --{band.length}</li>)}
                                            {tube === "ddGTP" && ddGTP?.map((band, index) => <li key={index}>{band} --{band.length}</li>)}
                                        </ul>
                                    </div>
                                </div>
                            </div>)}
                            {/*  */}
                        </div>
                    </div>

                    {/* bands graph */}
                    <div className={styles.graphgrid}>
                        <div className={styles.maingrapgh}>
                            {boxes}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}