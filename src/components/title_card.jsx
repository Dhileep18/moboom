import { Card, Typography } from '@mui/material'
import React from 'react'

export const TitleCard = () => {
    return (
        <Card  sx={{ p:2,background: "linear-gradient(90deg, rgba(18,17,17,1) 34%, rgba(227,97,91,1) 100%)" ,borderRadius:2}}>
            <Typography sx={{ color: "#fff", fontWeight: 600,fontSize:"medium"}}>Grab Up to 80% Discount on Everything!</Typography>
            <Typography sx={{ color: "#e2dada",fontSize: "small" }}>Flash Sales begins in June. Get up to 80% Discount on all products <span style={{color: "#fff", fontWeight: 600, cursor: "pointer", fontSize: ""}}> Read More</span> </Typography>
        </Card>
    )
}
