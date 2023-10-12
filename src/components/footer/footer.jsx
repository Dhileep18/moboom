import AdbIcon from '@mui/icons-material/Adb';
import AppleIcon from '@mui/icons-material/Apple';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import img2 from '../../assets/img2.jpeg';
import img3 from '../../assets/img3.jpeg';
import img4 from '../../assets/img4.jpeg';
import img5 from '../../assets/img5.jpeg';

const list = [
    {
        img: img4,
    },
    {
        img: img2,
    },
    {
        img: img3,
    },
    {
        img: img4,
    },
    {
        img: img2,
    },
    {
        img: img3,
    },
    {
        img: img4,
    },
    {
        img: img2,
    },
    {
        img: img3,
    },
    {
        img: img4,
    },
    {
        img: img2,
    },
    {
        img: img3,
    },
    {
        img: img4,
    },
    {
        img: img5,
    },
]
function Footer() {
    return (
        <footer style={{ background: '#e6e6e6' }} >
            <Container maxWidth="lg" sx={{ paddingBottom: 10 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={2} display={{ xs: 'none', md: 'block' }}>
                        <Company />
                    </Grid>
                    <Grid item xs={12} sm={6} md={2} display={{ xs: 'none', md: 'block' }}>
                        <Help />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} display={{ xs: 'none', md: 'block' }}>
                        <Customer />
                    </Grid>
                    <Grid item xs={12} sm={6} md={5}>
                        <Grid container spacing={2}>
                            <Grid item xs={8} sm={8} md={10}>
                                <Social />
                            </Grid>
                            <Grid item xs={4} sm={4} md={2}>
                                <Platforms />
                            </Grid>
                        </Grid>
                        <Grid>
                            <Stack mt={5}>
                                <EmailSubscription />
                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container spacing={3} mt={{ xs: 2, md: 5 }}>
                    <Grid item xs={12} sm={6} md={7}>
                        <CopyText />
                    </Grid>
                    <Grid item xs={12} sm={6} md={5} display={{ xs: 'none', md: 'block' }}>
                        <CreditCardList />
                    </Grid>
                </Grid>
            </Container>
        </footer>
    );
}

export default Footer;

export const Help = () => {
    return (
        <>
            <Stack>
                <Typography variant="p" color="textPrimary" textTransform={'uppercase'} fontSize={'16px'}>
                    Help & Support
                </Typography>
            </Stack>
            <Stack mt={1}>
                <Typography variant="p" color="#848a96">
                    Shipping Info
                </Typography>
            </Stack>
            <Stack>
                <Typography variant="p" color="#848a96">
                    Returns
                </Typography>
            </Stack>
            <Stack>
                <Typography variant="p" color="#848a96">
                    How to Order
                </Typography>
            </Stack>
            <Stack>
                <Typography variant="p" color="#848a96">
                    How to Track
                </Typography>
            </Stack>
            <Stack>
                <Typography variant="p" color="#848a96">
                    Size Chart
                </Typography>
            </Stack>
        </>
    )
}

export const Company = () => {
    return (
        <>
            <Stack>
                <Typography variant="h6" color="textPrimary" textTransform={'uppercase'} fontSize={'16px'}>
                    Company Info
                </Typography>
            </Stack>
            <Stack mt={1} >
                <Typography variant="p" color="#848a96">
                    About
                </Typography>
            </Stack>
            <Stack>
                <Typography variant="p" color="#848a96">
                    Social Responsbility
                </Typography>
            </Stack>
            <Stack>
                <Typography variant="p" color="#848a96">
                    Affiliate
                </Typography>
            </Stack>
            <Stack>
                <Typography variant="p" color="#848a96">
                    Fashion Blogger
                </Typography>
            </Stack>
        </>
    )
}

export const Customer = () => {
    return (
        <>
            <Stack>
                <Typography variant="h6" color="textPrimary" textTransform={'uppercase'} fontSize={'16px'}>
                    Customer Care
                </Typography>
            </Stack>
            <Stack mt={1}>
                <Typography variant="p" color="#848a96">
                    Contact Us
                </Typography>
            </Stack>
            <Stack>
                <Typography variant="p" color="#848a96">
                    Payment
                </Typography>
            </Stack>
            <Stack>
                <Typography variant="p" color="#848a96">
                    Bonus Point
                </Typography>
            </Stack>
            <Stack>
                <Typography variant="p" color="#848a96">
                    Notices
                </Typography>
            </Stack>
        </>
    )
}

export const Social = () => {
    return (
        <>
            <Stack>
                <Typography variant="h6" color="textPrimary" textTransform={'uppercase'} fontSize={'16px'}>
                    Socials
                </Typography>
            </Stack >
            <Stack flexDirection={'row'} mt={1}>
                <FacebookIcon sx={{ fontSize: { xs: 20, md: 30 }, marginLeft: 1, marginRight: 1 }} />
                <InstagramIcon sx={{ fontSize: { xs: 20, md: 30 }, marginLeft: 1, marginRight: 1 }} />
                <TwitterIcon sx={{ fontSize: { xs: 20, md: 30 }, marginLeft: 1, marginRight: 1 }} />
                <WhatsAppIcon sx={{ fontSize: { xs: 20, md: 30 }, marginLeft: 1, marginRight: 1 }} />
                <CircleNotificationsIcon sx={{ fontSize: { xs: 20, md: 30 }, marginLeft: 1, marginRight: 1 }} />
            </Stack>

        </>
    )
}

export const Platforms = () => {
    return (
        <>
            <Stack>
                <Typography variant="h6" color="textPrimary" textTransform={'uppercase'} fontSize={'16px'} >
                    Platforms
                </Typography>
                <Stack flexDirection={'row'} mt={1}>
                    <AdbIcon sx={{ fontSize: { xs: 20, md: 30 }, marginLeft: 1, marginRight: 1 }} />
                    <AppleIcon sx={{ fontSize: { xs: 20, md: 30 }, marginLeft: 1, marginRight: 1 }} />
                </Stack>
            </Stack>

        </>
    )
}

export const EmailSubscription = () => {
    const [email, setEmail] = useState('');
    return (
        <Container maxWidth="lg">
            <Grid container spacing={2}>
                <Typography>SIGN UP</Typography>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} md={9}>
                        <TextField
                            fullWidth
                            label="Email"
                            variant="outlined"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            sx={{ height: '50px', borderRadius: 'unset' }}
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            type="submit"
                            sx={{ height: '50px', backgroundColor: 'black', borderRadius: 'unset' }}
                        >
                            Subscribe
                        </Button>
                    </Grid>
                </Grid>
                <Typography variant="body2" color="#848a96" sx={{ textAlign: { xs: 'center', md: 'left' }, fontSize: { xs: '12px', md: '10px' } }} mt={2}>
                    By Clicking a SUBSCRIBE button you are agreeing to our <Link href="/privacy-policy" color="primary" pr={2}>
                        Privacy & Cookie policy
                    </Link>
                </Typography>
            </Grid>
        </Container>
    );
}

export const CopyText = () => {
    return (
        <>
            <Stack>
                <Stack mt={1}>
                    <Typography variant="body2" color="#848a96" sx={{ textAlign: { xs: 'center', md: 'left' } }} mb={{ xs: 3, md: 1 }}>
                        &copy;2022- {new Date().getFullYear()} All Rights Reserved
                    </Typography>
                </Stack>
                <Stack flexDirection="row" mt={1}>
                    <Link href="/privacy-policy" color="#848a96" pr={2}>
                        Privacy Center
                    </Link>
                    <Divider orientation="vertical" flexItem />
                    <Link href="/privacy-policy" color="#848a96" px={2}>
                        Privacy & Cookie Policy
                    </Link>
                    <Divider orientation="vertical" flexItem />
                    <Link href="/privacy-policy" color="#848a96" px={2}>
                        Manage Cookies
                    </Link>
                </Stack>
                <Stack flexDirection="row" mt={1}>
                    <Link href="/privacy-policy" color="#848a96" pr={2}>
                        Terms & Conditions
                    </Link>
                    <Divider orientation="vertical" flexItem />
                    <Link href="/privacy-policy" color="#848a96" px={2}>
                        Copyright Notice Imprint
                    </Link>
                </Stack>
            </Stack>

        </>
    )
}

export const CreditCardList = () => {
    return (
        <>
            <Stack direction={"row"} gap={1} sx={{
                flexWrap: 'wrap'
            }}>
                {list.map((item) => {
                    return (
                        <img src={item.img} width={50} height={30} loading='lazy'></img>
                    )
                })}
            </Stack>
        </>
    )
}