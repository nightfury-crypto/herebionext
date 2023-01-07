import { useRef, useState } from "react";
import styles from "../styles/Nav.module.css"
import Link from 'next/link';
import { BsFillArrowDownCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import { GiHamburgerMenu, GiCrossedBones } from "react-icons/gi";
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListItem, { listItemClasses } from '@mui/joy/ListItem';
import ListItemButton, { listItemButtonClasses } from '@mui/joy/ListItemButton';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import ReceiptLong from '@mui/icons-material/ReceiptLong';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

export default function Nav() {

    const [isOpened, setIsOpened] = useState(false)
    const [open1, setOpen1] = useState(true);

    return (
        <div className={styles.nav}>
            <div className={styles.hamburger} onClick={() => setIsOpened(!isOpened)}>
                {isOpened ? <GiCrossedBones size={26} onClick={() => setIsOpened(!isOpened)} />
                    : <GiHamburgerMenu size={26} onClick={() => setIsOpened(!isOpened)} />}
            </div>
            {isOpened && <div className={styles.wrapper}>
                <div className={styles.navbar}>
                    <Box
                        sx={{
                            width: 320,
                            pl: '30px',
                        }}
                    >
                        <List
                            size="sm"
                            sx={(theme) => ({
                                // Gatsby colors
                                '--joy-palette-primary-plainColor': '#8a4baf',
                                '--joy-palette-neutral-plainHoverBg': 'transparent',
                                '--joy-palette-neutral-plainActiveBg': 'transparent',
                                '--joy-palette-primary-plainHoverBg': 'transparent',
                                '--joy-palette-primary-plainActiveBg': 'transparent',
                                [theme.getColorSchemeSelector('dark')]: {
                                    '--joy-palette-text-secondary': '#635e69',
                                    '--joy-palette-primary-plainColor': '#d48cff',
                                },

                                '--List-insetStart': '32px',
                                '--List-item-paddingY': '0px',
                                '--List-item-paddingRight': '16px',
                                '--List-item-paddingLeft': '21px',
                                '--List-item-startActionWidth': '0px',
                                '--List-item-startActionTranslateX': '-50%',

                                [`& .${listItemButtonClasses.root}`]: {
                                    borderLeft: '1px solid',
                                    borderColor: 'divider',
                                },
                                [`& .${listItemButtonClasses.root}.${listItemButtonClasses.selected}`]: {
                                    borderColor: 'currentColor',
                                },
                                [`& .${listItemClasses.nested} > .${listItemButtonClasses.root}`]: {
                                    border: 'none',
                                },
                                '& [class*="startAction"]': {
                                    color: 'var(--joy-palette-text-tertiary)',
                                },
                            })} >
                            <ListItem nested>
                                <ListItem component="div" startAction={<ReceiptLong />}>
                                    <Typography level="body1" sx={{ textTransform: 'uppercase' }}>
                                        HERE BIO
                                    </Typography>
                                </ListItem>
                                <List sx={{ '--List-gap': '8px' }}>
                                    <ListItem>
                                        <ListItemButton selected>
                                            <Link href="/">Home</Link>
                                        </ListItemButton>
                                    </ListItem>
                                </List>
                                {/* <List sx={{ '--List-gap': '0px' }}>
                                    <ListItem>
                                        <ListItemButton selected>
                                            <Link href="/">About</Link>
                                        </ListItemButton>
                                    </ListItem>
                                </List> */}
                            </ListItem>
                            <ListItem
                                nested
                                sx={{ my: 1 }}
                                startAction={
                                    <IconButton variant="plain" size="sm" color="neutral" onClick={() => setOpen1(!open1)} >
                                        <KeyboardArrowDown
                                            sx={{ transform: open1 ? 'initial' : 'rotate(-90deg)' }}
                                        />
                                    </IconButton>
                                } >
                                <ListItem>
                                    <Typography
                                        level="inherit"
                                        sx={{
                                            fontWeight: open1 ? 'bold' : undefined,
                                            color: open1 ? 'text.primary' : 'inherit',
                                        }} >
                                        Services
                                    </Typography>
                                    <Typography component="span" level="body3" sx={{ ml: 1 }}>
                                        3
                                    </Typography>
                                </ListItem>
                                {open1 && (
                                    <List sx={{ '--List-item-paddingY': '8px' }}>
                                        <ListItem>
                                            <ListItemButton>
                                                <Link href="/complementary">
                                                    1. Complementary
                                                </Link>
                                            </ListItemButton>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemButton>
                                                <Link href="/gccontent">
                                                    2. GC/AT Content
                                                </Link>
                                            </ListItemButton>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemButton>
                                                <Link href="/sequencing/sanger">
                                                    3. Sanger sequencing
                                                </Link>
                                            </ListItemButton>
                                        </ListItem>
                                    </List>
                                )}
                            </ListItem>
                            {/* <ListItem nested>
                                <List sx={{ '--List-gap': '0px' }}>
                                    <ListItem>
                                        <ListItemButton selected>
                                            <Link href="/">Contact</Link>
                                        </ListItemButton>
                                    </ListItem>
                                </List>
                            </ListItem> */}
                        </List>
                    </Box>
                </div>
            </div>}
        </div>
    )
}