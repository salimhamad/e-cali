import React from "react";
import { useParams } from "react-router";
import ALLDiviceCreater from "../components/ALLDiviceCreater";
// import { useState } from "react";
export default function Product() {
  let { category } = useParams();

  // const [quantity, setQuantity] = useState(1);

  const cardDetail = [
    {
      id: "1",
      categoryArray: "laptop",
      image:
        "https://www.seekpng.com/png/full/327-3279164_lenovo-laptop-png-lenovo-laptop-png-transparent.png",
      title: " lenevo ",
      content: "laptop lenevo 64gb ram8 ",
      prise: 1000,
    },
    {
      id: "2",
      categoryArray: "ios",
      image:
        "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F60a91f9a5f6002a4c8174108%2FApple--iPhone--iPhone-13--new-iPhone--iPhone-upgrade--pink-iPhone--iPhone-13-release-%2F960x0.jpg%3Ffit%3Dscale",
      title: " iphone 12 ",
      content: "128gb ram8",
      prise: 1000,
    },
    {
      id: "3",
      categoryArray: "ios",
      image: "https://pngimg.com/uploads/iphone_12/iphone_12_PNG36.png",
      title: " iphone 13  ",
      content: "1tera  3amera promax",
      prise: 1000,
    },

    {
      id: "4",
      categoryArray: "android",
      image:
        "https://www.pngkey.com/png/detail/359-3594462_galaxy-note9-samsung-galaxy-note-9-128.png",
      title: " galaxy 5 ",
      content: "64gb  ram4",
      prise: 1000,
    },
    {
      id: "5",
      categoryArray: "android",
      image:
        "https://www.pngkey.com/png/detail/359-3594462_galaxy-note9-samsung-galaxy-note-9-128.png",
      title: " galaxy 11 ",
      content: "128 gb ram 4 ",
      prise: 1000,
    },
{
    id: "6",
    categoryArray: "laptop",
    image:
      "https://www.seekpng.com/png/full/327-3279164_lenovo-laptop-png-lenovo-laptop-png-transparent.png",
    title: " lenevo ",
    content: "laptop lenevo 64gb ram8 ",
    prise: 1000,
  },
  {
    id: "7",
    categoryArray: "ios",
    image:
      "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F60a91f9a5f6002a4c8174108%2FApple--iPhone--iPhone-13--new-iPhone--iPhone-upgrade--pink-iPhone--iPhone-13-release-%2F960x0.jpg%3Ffit%3Dscale",
    title: " iphone 12 ",
    content: "128gb ram8",
    prise: 1000,
  },
  {
    id: "8",
    categoryArray: "ios",
    image: "https://pngimg.com/uploads/iphone_12/iphone_12_PNG36.png",
    title: " iphone 13  ",
    content: "1tera  3amera promax",
    prise: 1000,
  },

  {
    id: "9",
    categoryArray: "android",
    image:
"https://m.media-amazon.com/images/I/817bQtKyr5L._AC_SX679_.jpg",
    title: " galaxy 5 ",
    content: "64gb  ram4",
    prise: 1000,
  },
  {
    id: "10",
    categoryArray: "android",
    image:
"https://m.media-amazon.com/images/I/817bQtKyr5L._AC_SX679_.jpg",
    title: " galaxy 11 ",
    content: "128 gb ram 4 ",
    prise: 1000,
  },
  ];
  console.log(category);

  let categoryproducts = cardDetail.filter((product) => {
    return product.categoryArray === category;
  });
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        paddingTop: "20px",
        alignContent: "center",
      }}
    >
      {categoryproducts.map((product, index) => (
        // <div className="product">{product.title}</div>
        <ALLDiviceCreater button="fulldetaileDevice" product={product} />
      ))}
    </div>
  );
}
