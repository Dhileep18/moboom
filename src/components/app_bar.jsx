import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import InputBase from '@mui/material/InputBase';
import { Box, Container, Divider, Grid, List, Stack, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../assets/logo.png'
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Drawer from '@mui/material/Drawer';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { searchProducts } from '../store/dashboard/dashboardActions';
import { useDispatch, useSelector } from "react-redux";


const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'end',
}));

export default function Header() {
    const theme = useTheme();
    const [state, setState] = useState("")
    const [open, setOpen] = useState(false);
    const data = ["Store", "Acount", "Wish List"]
    return (
        <AppBar position='fixed' sx={{ background: "#fff", zIndex: 100, width: "100%", boxShadow: 3, py: 1 }}>
            <Container sx={{ display: { xs: "none", md: "flex" } }}>
                <Grid container alignItems={"center"} spacing={3} >
                    <Grid item xs={2}>
                        <img src={logo} alt='app-log' />
                    </Grid>
                    <Grid item xs={5}>
                        <Search setState={setState} state={state} />
                    </Grid>
                    <Grid item xs={3}>
                        <Stack direction={"row"} gap={3}>
                            {data.map((item) => {
                                return (
                                    <Typography key={item} sx={{ color: "#a3a1a1", fontWeight: 600, cursor: "pointer", fontSize: "small" }}>{item}</Typography>
                                )
                            })}
                        </Stack>
                    </Grid>
                    <Grid item xs={2} >
                        <Stack direction={"row"} justifyContent={"end"} alignItems={"center"} >
                            <Typography sx={{ color: "#000", fontWeight: 600, cursor: "pointer", fontSize: "small" }}>Basket</Typography>
                            <IconButton>
                                <ShoppingCartIcon color='#000' fontSize='small' />
                            </IconButton>
                        </Stack>
                    </Grid>
                </Grid>

            </Container>
            <Container sx={{ display: { xs: "block", md: "none" } }}>
                <Grid container alignItems={"center"}>
                    <Grid item xs={1}>
                        <IconButton sx={{ p: '10px' }} aria-label="menu">
                            <MenuIcon onClick={() => setOpen(true)} />
                        </IconButton>
                    </Grid>
                    <Grid item xs={10} justifyContent={"center"} display={"flex"}>
                        <img src={logo} alt='app-log' />
                    </Grid>
                </Grid>
            </Container>
            <CustomDrawer open={open} setOpen={setOpen} theme={theme} data={data} />
        </AppBar>
    );
}

export const Search = ({ setState, state, padding }) => {
    const dispatch = useDispatch()
    return (
        <Box sx={{ borderRadius: "5px", border: "2px solid #dcdcdc", display: "flex" }}>
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="What do you want to buy today?"
                value={state}
                onChange={(e) => {
                    setState(e.target.value);
                    dispatch(searchProducts(e.target.value));
                  }}
            />
            <IconButton type="button" sx={{ p: padding || '10px' }} aria-label="search">
                {state ? <CloseIcon onClick={() => setState("")} /> : <SearchIcon />}
            </IconButton>
        </Box>
    )
}


export const CustomDrawer = ({ open, setOpen, theme, data }) => {
    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                },
            }}
            variant="persistent"
            anchor="left"
            open={open}
        >
            <DrawerHeader>
                <IconButton onClick={() => setOpen(false)}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
                {data.map((item) => {
                    return (
                        <ListItem disablePadding key={item}>
                            <ListItemButton sx={{ color: "#000", fontWeight: 600, cursor: "pointer", fontSize: "small" }} >
                                {item}
                            </ListItemButton>
                        </ListItem>
                    )
                })}
            </List>
            <Divider />
            <List >
                <Stack direction={"row"} alignItems={"center"} pl={2}>
                    <Typography sx={{ color: "#000", fontWeight: 600, cursor: "pointer", fontSize: "small" }}>Basket</Typography>
                    <IconButton>
                        <ShoppingCartIcon color='#000' fontSize='small' />
                    </IconButton>
                </Stack>
            </List>
        </Drawer>
    )
}
