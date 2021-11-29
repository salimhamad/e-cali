import React from "react";
import Footer from "../components/Footer";

import Carousel from "react-bootstrap/Carousel";

export default function Home() {
  return (
    <div>
      <Carousel style={{ width: "40rem", height: "40rem" }} variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            //src="holder.js/800x400?text=First slide&bg=373940"
            src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-family-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1629842667000"
            alt="First slide"
            style={{ width: "8rem", height: "40rem" }}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            // src="holder.js/800x400?text=Second slide&bg=282c34"
            src="https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/pc/matebook-13-2021/imgs/huawei-matebook-13-2021-wallpaper@2x.webp"
            alt="Second slide"
            style={{ width: "8rem", height: "40rem" }}
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            //src="holder.js/800x400?text=Third slide&bg=20232a"
            src="https://www.notebookcheck.net/fileadmin/_processed_/c/d/csm_Produktfotos_Apple_iPhone_13_Pro_1448_0001583eaa.jpg"
            alt="Third slide"
            style={{ width: "5rem", height: "30rem" }}
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* cally componenty footer */}
      <Footer />
    </div>
  );
}
