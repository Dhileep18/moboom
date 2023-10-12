import { Box, Card, Typography } from '@mui/material'
import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: '#ff6d75',
    },
    '& .MuiRating-iconHover': {
        color: '#ff3d47',
    },
});
export const Productcard = ({ data, key }) => {
    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) {
          return text;
        } else {
          return text.slice(0, maxLength) + '...';
        }
      };

    return (
        <Card key={key} sx={{ borderRadius: 2, boxShadow: 0, border: "1px solid #dfdfdf", position: "relative", height: { xs: "270px", md: "300px" } }}>
            <Box sx={{ position: "absolute", top: "5px", right: "5px", p: "2px", borderRadius: 1, background: "#fff", display: "flex", alignItems: "center" }}>
                <StyledRating
                    name="customized-color"
                    getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                    max={1}
                    icon={<FavoriteIcon fontSize="inherit" />}
                    emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                />
            </Box>
            <img src={data?.thumbnail} height={"65%"} style={{ objectFit: "cover" }} width={"100%"} />
            <Box sx={{ p: 1 }}>
                <Typography sx={{ color: "#000", fontWeight: 600,fontSize: { xs: "10px", md: "smaller"} }}>{data?.brand}</Typography>
                <Typography sx={{ color: "#746161", ontSize: "small", fontSize: { xs: "7px", md: "10px" } }}>{truncateText(data?.description, 70)}</Typography>
                <Typography sx={{ color: "#000", fontWeight: 600, fontSize: "small", pt: { md: 0.5, xs: 0 } }}>${data?.price}</Typography>
                <Rating name="size-small" defaultValue={data?.rating} size="small" />
            </Box>
        </Card>
    )
}
