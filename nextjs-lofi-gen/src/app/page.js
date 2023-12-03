import CategoryList from "@/components/categoryList";
import SongList from "@/components/songList";
import { AccessTime, PlayCircle } from "@mui/icons-material";
import { Grid, IconButton, Typography } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <Grid
      container
      // direction={"column"}
      alignItems={"stretch"}
      sx={{ minHeight: "100vh", width: "100vw" }}
    >
      <Grid container alignItems={"flex-end"} item xs={12} p={2}>
        <Grid
          item
          container
          alignItems={"center"}
          justifyContent={"flex-start"}
        >
          <AccessTime sx={{ fontSize: "70px" }} />
          <Typography variant="h2" fullWidth>
            Timer here
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        direction={"row"}
        item
        justifyContent={"center"}
        alignItems={"stretch"}
        xs={12}
        sx={{ padding: "0px 20px 0px 20px" }}
      >
        <Grid
          item
          component={"div"}
          // src={"/milky_way.jpg"}
          style={{
            maxWidth: "95%",
            // maxHeight: "50vh",

            backgroundImage: 'url("/milky_way.jpg")',
            borderRadius: "10px",
            padding: "30px",
          }}
          sx={{ maxHeight: "45vh" }}
          sm={12}
          md={6}
          container
          justifyContent={"flex-start"}
          alignItems={"flex-end"}
        >
          <Grid
            container
            justifyContent={"space-between"}
            alignItems={"flex-end"}
            sx={{ width: "100%", height: "100%" }}
          >
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
        <Grid
          item
          container
          // component={"div"}
          sm={12}
          md={6}
          sx={{
            maxHeight: "45vh",
            padding: { md: "0px 20px 0px 20px", sm: "0px" },
          }}
          // alignItems={"stretch"}
          justifyContent={"center"}
        >
          <SongList />
        </Grid>
      </Grid>

      <Grid
        item
        xs={12}
        direction={"row"}
        container
        justifyContent={"center"}
        alignItems={"center"}
        padding={2}
      >
        <CategoryList />
      </Grid>
    </Grid>
    // </main>
  );
}
