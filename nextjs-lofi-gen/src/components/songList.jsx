import { PlayArrow } from "@mui/icons-material";
import {
  Box,
  Grid,
  Stack,
  Typography,
  Paper,
  Card,
  CardContent,
  CardMedia,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

function SongList() {
  return (
    <Box
      sx={{
        maxWidth: "100%",
        maxHeight: "50vh",
        padding: "10px",
        borderRadius: "10px",
      }}
    >
      <Grid
        sx={{
          width: "100%",
          height: "100%",
          overflowX: "hidden",
          overflowY: "scroll",
        }}
        container
        direction={"row"}
        justifyContent={"center"}
        alignItems="flex-start"
      >
        {songArr.map((obj, ind) => {
          //   console.log(ind);
          //   console.log(obj);
          return (
            <Card
              key={ind}
              sx={{
                display: "flex",
                width: "100%",
                margin: "10px",
                borderRadius: "10px",
                backgroundColor: "rgba(255,255,255,.1)",
              }}
            >
              <CardMedia
                component={"img"}
                sx={{ width: 150 }}
                image={obj.img}
              />
              <Grid
                container
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography color={"whitesmoke"} component="div" variant="h5">
                    {obj.title}
                  </Typography>
                  <Typography
                    color={"whitesmoke"}
                    variant="subtitle1"
                    component="div"
                  >
                    {obj.artist}
                  </Typography>
                </CardContent>

                <Typography
                  color={"whitesmoke"}
                  variant="subtitle1"
                  // color="text.secondary"
                  component="div"
                  sx={{ padding: "10px" }}
                >
                  {obj.time}
                </Typography>
                <IconButton>
                  <PlayArrow sx={{ color: "whitesmoke" }} />
                </IconButton>
              </Grid>
            </Card>
            // </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default SongList;

const songArr = [
  {
    title: "Song 1",
    img: "https://source.unsplash.com/random/150x100?sig=1",
    artist: "artist 1",
    time: "1:03",
  },
  {
    title: "Song 2",
    img: "https://source.unsplash.com/random/150x100?sig=2",
    artist: "artist 2",
    time: "1:03",
  },
  {
    title: "Song 3",
    img: "https://source.unsplash.com/random/150x100?sig=3",
    artist: "artist 3",
    time: "1:03",
  },
  {
    title: "Song 4",
    img: "https://source.unsplash.com/random/150x100?sig=4",
    artist: "artist 4",
    time: "1:03",
  },
  {
    title: "Song 5",
    img: "https://source.unsplash.com/random/150x100?sig=5",
    artist: "artist 5",
    time: "1:03",
  },
  {
    title: "Song 6",
    img: "https://source.unsplash.com/random/150x100?sig=6",
    artist: "artist 6",
    time: "1:03",
  },
  {
    title: "Song 7",
    img: "https://source.unsplash.com/random/150x100?sig=7",
    artist: "artist 7",
    time: "1:03",
  },
  {
    title: "Song 8",
    img: "https://source.unsplash.com/random/150x100?sig=8",
    artist: "artist 8",
    time: "1:03",
  },
  {
    title: "Song 9",
    img: "https://source.unsplash.com/random/150x100?sig=9",
    artist: "artist 9",
    time: "1:03",
  },
  {
    title: "Song 10",
    img: "https://source.unsplash.com/random/150x100?sig=10",
    artist: "artist 10",
    time: "1:03",
  },
  {
    title: "Song 11",
    img: "https://source.unsplash.com/random/150x100?sig=11",
    artist: "artist 11",
    time: "1:03",
  },
];
