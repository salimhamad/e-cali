import React from "react";
import Footer from "../components/Footer";

import Carousel from "react-bootstrap/Carousel";

export default function Home() {
  return (
    <div>
      {/* <div style={{ marginLeft: "12px" }}>
        <h6>welcome to E-cali</h6>
        <div>enjoy with e-buy</div>
      </div> */}

      <div style={{ display: "" }}>
        <Carousel style={{ width: "100%", height: "40rem" }} variant="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              //src="holder.js/800x400?text=First slide&bg=373940"
              // src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-family-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1629842667000"
              src="https://www.notebookcheck.net/fileadmin/_processed_/c/d/csm_Produktfotos_Apple_iPhone_13_Pro_1448_0001583eaa.jpg"
              alt="First slide"
              style={{ width: "5rem", height: "30rem", marginTop: "10px" }}
            />
            <Carousel.Caption>
              {/* <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              // src="holder.js/800x400?text=Second slide&bg=282c34"
              // src="https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/pc/matebook-13-2021/imgs/huawei-matebook-13-2021-wallpaper@2x.webp"
              // src="https://i0.wp.com/mobilanyheter.net/wp-content/uploads/2020/04/Screenshot_20200402-032214_Instagram-2.jpg?fit=1080%2C1000&ssl=1"
              src="https://www.notebookcheck.net/fileadmin/_processed_/c/d/csm_Produktfotos_Apple_iPhone_13_Pro_1448_0001583eaa.jpg"
              alt="Second slide"
              style={{ width: "5rem", height: "30rem", marginTop: "10px" }}
            />

            <Carousel.Caption>
              {/* <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              //src="holder.js/800x400?text=Third slide&bg=20232a"
              src="https://www.notebookcheck.net/fileadmin/_processed_/c/d/csm_Produktfotos_Apple_iPhone_13_Pro_1448_0001583eaa.jpg"
              alt="Third slide"
              style={{ width: "5rem", height: "30rem", marginTop: "10px" }}
            />

            <Carousel.Caption>
              {/* <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div
          style={{
            marginTop: "50px",
            // marginLeft: "180px",
            fontSize: "20px",
            fontWeight: "bold",
            justifyContent: "space-around",
            marginBottom: "50px",
          }}
        >
          <h6>welcome to E-cali</h6>
          <div>enjoy with e-buy</div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              border: "2px solid black",
              borderRadius: "30px",
              padding: "5px",
            }}
          >
            <img
              style={{ width: "150px", height: "150px", marginTop: "10px" }}
              src="https://www.seekpng.com/png/detail/327-3279164_lenovo-laptop-png-lenovo-laptop-png-transparent.png
"
            />
            <img
              style={{ width: "150px", height: "150px", marginTop: "10px" }}
              src="https://thumbs.dreamstime.com/b/march-moscow-russia-iphone-pro-max-graphite-four-cameras-new-phone-214663126.jpg"
            />
            <img
              style={{ width: "150px", height: "150px", marginTop: "10px" }}
              src="https://www.seekpng.com/png/detail/327-3279164_lenovo-laptop-png-lenovo-laptop-png-transparent.png
"
            />
            <img
              style={{ width: "150px", height: "150px", marginTop: "10px" }}
              src="https://www.seekpng.com/png/detail/327-3279164_lenovo-laptop-png-lenovo-laptop-png-transparent.png
"
            />
            <img
              style={{ width: "150px", height: "150px", marginTop: "10px" }}
              src="https://thumbs.dreamstime.com/b/march-moscow-russia-iphone-pro-max-graphite-four-cameras-new-phone-214663126.jpg"
            />
            <img
              style={{ width: "150px", height: "150px", marginTop: "10px" }}
              src="https://www.seekpng.com/png/detail/327-3279164_lenovo-laptop-png-lenovo-laptop-png-transparent.png
"
            />
          </div>
        </div>
      </div>
      {/* cally componenty footer */}
      <Footer />
    </div>
  );
}
