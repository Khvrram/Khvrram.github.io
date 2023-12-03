import { Button, Grid } from "@mui/material";
import React from "react";

function CategoryList() {
  return (
    <Grid container sx={{ width: "100%", height: "100%" }}>
      {category_arr.map((obj, idx) => {
        return (
          <Grid key={idx} item xs={12} md={3} sx={{ padding: "10px" }}>
            <Button
              variant="contained"
              fullWidth
              sx={{ height: "100%", backgroundImage: obj.colour }}
            >
              {obj.name}
            </Button>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default CategoryList;

const category_arr = [
  {
    name: "Category 1",
    colour: "linear-gradient(to right, #4ecaec 0%, #36badd 50%, #3fa1d9 100%)",
  },
  {
    name: "Category 2",
    colour: "linear-gradient(to right, #4099d7 0%, #478cd7 50%, #4d80d5 100%)",
  },
  {
    name: "Category 3",
    colour: "linear-gradient(to right, #4f79d4 0%,#546cd2 50%, #5760d1 100%)",
  },
  {
    name: "Category 4",
    colour: "linear-gradient(to right, #5760d1 0%,#5959cf 50%, #604bce 100%)",
  },
];
