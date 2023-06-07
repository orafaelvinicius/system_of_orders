import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import Link from "next/link";

export default function ButtonMenu(props: any) {
    return (
        <>
            <Link href={props.link} style={{ textDecoration: 'none' }}>
                <ListItemButton
                    sx={{
                        minHeight: 48,
                        justifyContent: props.open ? 'initial' : 'center',
                        px: 2.5,
                    }}
                >
                    <ListItemIcon
                        sx={{
                            minWidth: 0,
                            mr: props.open ? 3 : 'auto',
                            justifyContent: 'center',

                        }}
                    >
                        {props.icon}
                    </ListItemIcon>
                    <ListItemText primary={props.name} sx={{ opacity: props.open ? 1 : 0, color: 'initial' }} />
                </ListItemButton>
            </Link>
        </>
    )
} 
