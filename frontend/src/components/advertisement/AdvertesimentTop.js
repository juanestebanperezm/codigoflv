import React from "react";

//MUI
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { makeStyles } from "@material-ui/styles";

const useStyles=makeStyles({
    anuncios:{
        overflowY:"hidden", 
        margin:"auto"    
    }
})

function AdvertesimentTop() {

    const classes=useStyles()

  return (
    <div >
      <ImageList sx={{ width: 1250, height: 300 }} cols={12} rowHeight={164} className={classes.anuncios}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    </div>
  );
}

const itemData = [
  {
    img: "https://horapiko.com/wp-content/uploads/2021/01/%C2%BFHu-Tao-viene-en-la-version-13-de-Genshin-Impact.jpg",
    title: "Breakfast",
  },
  {
    img: "https://w0.peakpx.com/wallpaper/1016/552/HD-wallpaper-mary-saotome-anime-apostar-chica-anime-kakegurui-kakegurui-anime-mona-china-otaku.jpg",
    title: "Burger",
  },
  {
    img: "https://w0.peakpx.com/wallpaper/344/329/HD-wallpaper-zero-two-chica-anime.jpg",
    title: "Camera",
  },
  {
    img: "https://w0.peakpx.com/wallpaper/841/462/HD-wallpaper-midari-aesthetics-aesthetic-anime-kakegurui-midari-ikishima.jpg",
    title: "Camera",
  },
  {
    img: "https://w0.peakpx.com/wallpaper/962/466/HD-wallpaper-anime-anime-girls-in-jabami-yumeko-kakegurui.jpg",
    title: "Camera",
  },
  {
    img: "https://w0.peakpx.com/wallpaper/461/33/HD-wallpaper-02-anime-asthetic-anime-darling-in-the-franxx-naruto-naruto-asthetic-naruto-waifu-zero-two-zero-two.jpg",
    title: "Camera",
  },
  {
    img: "https://w0.peakpx.com/wallpaper/274/780/HD-wallpaper-zero-two-darling-in-the-franxx.jpg",
    title: "Camera",
  },
  {
    img: "https://w0.peakpx.com/wallpaper/998/998/HD-wallpaper-zero-two-darling-in-the-franxx-darling-in-the-franxx-bodysuit-nasa.jpg",
    title: "Camera",
  },
  {
    img: "https://w0.peakpx.com/wallpaper/1011/670/HD-wallpaper-mona-china-anime-anime-mona-china-takanashi-rikka-waifu-anime.jpg",
    title: "Camera",
  },
  {
    img: "https://w0.peakpx.com/wallpaper/13/561/HD-wallpaper-anime-anime-waifu.jpg",
    title: "Camera",
  },
  {
    img: "https://w0.peakpx.com/wallpaper/702/874/HD-wallpaper-grand-theft-waifu-anime-anime-grand-theft-auto-k-on-megumin-rem-waifu.jpg",
    title: "Camera",
  },
  {
    img: "https://w0.peakpx.com/wallpaper/493/677/HD-wallpaper-makima-anime-girl-waifu-chainsaw-man.jpg",
    title: "Camera",
  },
  
];

export default AdvertesimentTop;
