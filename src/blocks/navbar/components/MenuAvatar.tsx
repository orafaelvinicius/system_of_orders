// import { useState, useEffect, useCallback } from 'react';
// import {
//     Box,
//     IconButton,
//     Avatar,
//     Typography,
//     Menu,
//     MenuItem,
//     Tooltip,
// } from '@mui/material';
// import { deleteCookie, getCookies } from 'cookies-next';
// import Link from 'next/link';
// import IUser from '../../../interfaces/IUser';
// import { access } from 'fs';
// import { useRouter } from 'next/router';

// export default function MenuProfile(props: any) {
//     const router = useRouter();
//     const [usuario, setUsuario] = useState<any>({});
//     const [cliente, setCliente] = useState<any>([]);
//     const token_access = getCookies().access;
//     const cliente_id = getCookies().client_id;
//     const user_id = getCookies().user_id;
//     const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

//     //Pega as informações dos clientes
//     const getClientInfos = useCallback(async () => {
//         await fetch(`https://api.beanalytic.com.br/clientes/${cliente_id}/`, {
//             method: 'GET',
//             headers: {
//                 Accept: 'application/json',
//                 'Content-Type': 'application/json',
//                 Authorization: `Bearer ${token_access}`,
//             },
//         })
//             .then(resp => resp.json())
//             .then(data => {
//                 setCliente(data);
//             })
//             .catch(err => console.error(err));
//     }, [cliente_id, token_access]);

//     const fetchUser = useCallback(async () => {
//         await fetch(`https://api.beanalytic.com.br/usuarios/${user_id}`, {
//             method: 'GET',
//             headers: {
//                 Accept: 'application/json',
//                 'Content-Type': 'application/json',
//                 Authorization: `Bearer ${token_access}`,
//             },
//         })
//             .then(resp => resp.json())
//             .then(data => {
//                 setUsuario(data);
//             })
//             .catch(err => console.error(err));
//     }, [user_id, token_access]);

//     // "Efeito" para carregar página apenas uma vez
//     useEffect(() => {
//         getClientInfos();
//         fetchUser();
//     }, [getClientInfos, fetchUser]);

//     const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
//         setAnchorElUser(event.currentTarget);
//     };
//     const handleCloseUserMenu = () => {
//         setAnchorElUser(null);
//     };

//     const logoutSystem = () => {
//         deleteCookie('access');
//         deleteCookie('access_token');
//         deleteCookie('refresh');
//         deleteCookie('user_id');
//         deleteCookie('client_id');
//         deleteCookie('user_type');
//         deleteCookie('sessionid');
//         deleteCookie('csrftoken');

//         router.push('/');
//     };

//     return (
//         <>
//             <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
//                 <Tooltip title="Open settings">
//                     <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                         <Avatar alt="Avatar User" src={props.info.LOGO} />

//                         <Box
//                             sx={{
//                                 display: 'flex',
//                                 flexDirection: 'column',
//                                 ml: '10px',
//                             }}
//                         >
//                             <Typography
//                                 variant="subtitle1"
//                                 noWrap
//                                 component="div"
//                                 sx={{
//                                     mr: 1,
//                                     display: { xs: 'none', md: 'flex' },
//                                     fontFamily: 'ubuntu',
//                                     fontWeight: 400,
//                                     color: props.info.COR_SECUNDARIA,
//                                     textDecoration: 'none',
//                                     textShadow: `#fff 0px 0px 1px`,
//                                 }}
//                             >
//                                 {usuario.first_name} {usuario.last_name}
//                             </Typography>
//                             <Typography
//                                 variant="subtitle2"
//                                 noWrap
//                                 component="div"
//                                 sx={{
//                                     mr: 1,
//                                     display: { xs: 'none', md: 'flex' },
//                                     fontFamily: 'ubuntu',
//                                     fontWeight: 400,
//                                     color: props.info.COR_SECUNDARIA,
//                                     textDecoration: 'none',
//                                     textShadow: `#fff 0px 0px 1px`,
//                                 }}
//                             >
//                                 @{usuario.username}
//                             </Typography>
//                         </Box>
//                     </IconButton>
//                 </Tooltip>

//                 <Menu
//                     sx={{ mt: '45px' }}
//                     id="menu-appbar"
//                     anchorEl={anchorElUser}
//                     anchorOrigin={{
//                         vertical: 'top',
//                         horizontal: 'right',
//                     }}
//                     keepMounted
//                     transformOrigin={{
//                         vertical: 'top',
//                         horizontal: 'right',
//                     }}
//                     open={Boolean(anchorElUser)}
//                     onClose={handleCloseUserMenu}
//                 >
//                     <MenuItem onClick={handleCloseUserMenu}>
//                         <Link href={'/adm/perfil'}>
//                             <Typography textAlign="center">Perfil</Typography>
//                         </Link>
//                     </MenuItem>

//                     <MenuItem onClick={handleCloseUserMenu}>
//                         <Link href={'/dashboard'}>
//                             <Typography textAlign="center">
//                                 Dashboards
//                             </Typography>
//                         </Link>
//                     </MenuItem>

//                     <MenuItem onClick={handleCloseUserMenu}>
//                         <Typography onClick={logoutSystem} textAlign="center">
//                             Sair
//                         </Typography>
//                     </MenuItem>
//                 </Menu>
//             </Box>
//         </>
//     );
// }
