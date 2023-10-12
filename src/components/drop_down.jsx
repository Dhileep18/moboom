import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { getAllCategories, getByCategories } from '../store/dashboard/dashboardActions';
import { useDispatch, useSelector } from "react-redux";

export const Category = () => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState('');
  const [data, setData] = useState([])
  const categories = useSelector((state) => state.dashboard.categories);
  const handleChange = (event) => {
    setCategory(event.target.value);
    dispatch(getByCategories(event.target.value));
  };

  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  useEffect(() => {
    if (categories) {
      setData(categories)
    }
  }, [categories]);

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Select category"
          onChange={handleChange}
        >
          {data.map((category) => {
            return (
              <MenuItem key={category} value={category}>{category}</MenuItem>
            )
          })}

        </Select>
      </FormControl>
    </Box>
  );
}