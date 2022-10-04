import Carousel from "react-bootstrap/Carousel";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Loading from "../components/Loading/Loading";
function CarouselImage({ images }) {
  console.log("images", images);
  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: false,
    indicators: true,
    arrows: true,
    pauseOnHover: true,
    autoplay: false,
    easing: "ease",
    onChange: (oldIndex, newIndex) => {
      console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    },
  };
  if (!images) {
    return <Loading />;
  }
  return (
    <Carousel style={{height: "100%", padding:"0"}}>
      <Fade {...properties}>
        {images.map((image, index) => (
          <div className="each-fade" key={index}>
            <div className="image-container" style={{ cursor: "pointer" }}>
              {(image?.link.endsWith("png") || image.link.endsWith("jpeg")) ?
                <img src={image?.link} width="100%" height="100%" />
                :
                <video controls width="100%" height="100%">
                  <source src={image.link} type="video/mov" style={{width: "100%", height: "100%"}}/>
                  <source src={image.link} type="video/mp4" style={{width: "100%", height: "100%"}}/>
                  Sorry, your browser doesn't support embedded videos.
                </video>
              }
            </div>
          </div>
        ))}
      </Fade>
    </Carousel>
  );
}

export default CarouselImage;
