import CategoryList from "@/components/categoryList";
import SongList from "@/components/songList";
import { PlayCircle } from "@mui/icons-material";
import { Grid, IconButton, Typography } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <Grid container direction={"column"} sx={{ height: "100%", width: "100%" }}>
      <Grid container alignItems={"flex-end"} item xs={3} p={2}>
        <Typography variant="h2" fullWidth>
          Timer here
        </Typography>
      </Grid>
      <Grid
        container
        direction={"row"}
        item
        justifyContent={"center"}
        alignItems={"center"}
        xs
      >
        <Grid
          item
          component={"div"}
          // src={"/milky_way.jpg"}
          style={{
            maxWidth: "95%",
            height: "95%",
            backgroundImage: 'url("/milky_way.jpg")',
            borderRadius: "10px",
            padding: "30px",
          }}
          sm={12}
          md={6}
          container
          justifyContent={"flex-start"}
          alignItems={"flex-end"}
        >
          {/* <img
            src={"/milky_way.jpg"}
            style={{
              maxWidth: "100%",
              height: "auto",
              borderRadius: "50px",
              padding: "20px",
            }}
          /> */}
          <Grid container justifyContent={"space-between"}>
            <Grid item xs>
              <Typography variant="h3">Lofi</Typography>
              <Typography>Playlist</Typography>
            </Grid>
            <Grid
              container
              justifyContent={"center"}
              alignItems={"center"}
              item
              xs={2}
            >
              <IconButton>
                <PlayCircle sx={{ color: "white" }} fontSize="large" />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container sm={12} md={6}>
          {/* <Typography variant="h1" textAlign={"center"} fullWidth>
            List section
          </Typography> */}
          <SongList />
        </Grid>
      </Grid>

      <Grid
        item
        xs={3}
        direction={"row"}
        container
        justifyContent={"center"}
        alignItems={"center"}
        padding={2}
      >
        {/* <Typography variant="h1" textAlign={"center"} fullWidth>
          Category section
        </Typography> */}
        <CategoryList />
      </Grid>
      {/* <Grid
        item
        xs={1}
        direction={"row"}
        container
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography variant="h1" textAlign={"center"} fullWidth>
          Player section
        </Typography>
      </Grid> */}
    </Grid>
    // </main>
  );
}
