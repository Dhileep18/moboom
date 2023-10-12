import React, { useEffect } from 'react'
import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import { Category } from './drop_down'
import { Search } from './app_bar'
import { useState } from 'react'
import { TitleCard } from './title_card'
import { Productcard } from './product_card'
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from '../store/dashboard/dashboardActions'
import MyPagination from './pagination'
import CircularProgress from '@mui/material/CircularProgress';

const Landing = () => {
    const dispatch = useDispatch();
    const [state, setState] = useState("")
    const [data, setData] = useState([])
    const products = useSelector((state) => state.dashboard.products);
    const pagination = useSelector((state) => state.dashboard.pagination);
    const pageSize = 12;
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemPerPage] = useState(pageSize);
    const [totalItems, setTotalItems] = useState();

    const handlePageChange = (page) => {
        setCurrentPage(page);
        dispatch(getAllProducts({
            currentPage: page * itemsPerPage,
            limit: 12
        }));
    };

    useEffect(() => {
        dispatch(getAllProducts({
            currentPage: 0,
            limit: 12
        }));
    }, []);

    useEffect(() => {
        if (products) {
            setData(products.products)
            setCurrentPage(pagination.skip)
            setItemPerPage(pagination.limit)
            setTotalItems(pagination.total)
        }
    }, [products, pagination]);

    return (
        <Container >
            <Grid container mt={10}>
                <Grid item xs={12} sx={{ display: { xs: "none", md: 'Block' }, mb: 2 }}>
                    <TitleCard />
                </Grid>
                <Grid item xs={12} sx={{ display: { xs: "block", md: 'none' }, mb: 2 }}>
                    <Search setState={setState} state={state} padding={"15px"} />
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box sx={{ display: { xs: "block", md: 'none' }, }}>
                        <Grid container alignItems={"center"} >
                            <Grid item xs={4} >
                                <Typography sx={{ color: "#a3a1a1", fontWeight: 600, cursor: "pointer", fontSize: "small" }}>Select Category</Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Category />
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{ display: { xs: "none", md: 'block' }, }}>
                        <Category />
                    </Box>
                    <Grid item xs={12} sx={{ display: { xs: "block", md: 'none' }, my: 2 }}>
                        <TitleCard />
                    </Grid>

                </Grid>


            </Grid>
            {data ?
                <Grid container spacing={{ xs: 2, md: 2 }} sx={{ mt: { xs: 0, md: 3 } }}>
                    {data && data?.map((data, intex) => {
                        return (
                            <Grid item xs={6} md={3}>
                                <Productcard data={data} key={intex} />
                            </Grid>
                        )
                    })}
                </Grid>
                :
                <Stack alignItems={'center'}>
                    <CircularProgress
                        color="secondary"
                        size={50}
                    />
                </Stack>

            }
            <Stack sx={{ alignItems: { xs: "center", md: 'end' }, mt: 5, mb: 5 }}>
                <MyPagination
                    totalItems={totalItems}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onChange={handlePageChange}
                />
            </Stack>

        </Container>
    )
}

export default Landing