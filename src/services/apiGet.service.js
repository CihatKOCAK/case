import axios from "axios";

// export const getItems = async (url) => {

//     var x = fetch(url)
//     .then((response) => response.json())
//     .then((responseJSON) => {
//        // do stuff with responseJSON here...
//       return responseJSON;
//     });

//     console.log(x)
//     return x
// };

export const datas = [
  {
    id: 1,
    title: "Nike True Balance",
    price: 399.99,
    currency: "USD",
    image: "https://i.ibb.co/wzJCK04/shoe.png",
    description:
      "Outlines keep you honest. They stop you from indulging in poorly ought out metaphorsy about driving and keep you focused one the overall structure of your post",
    details: {
      brand: "Nike",
      model: "True Balance",
      sku: "NF3535",
      color: "White",
      collection: "2020 Spring",
      stock: 280,
    },
  },
  {
    id: 2,
    title: "Adidas Balance",
    price: 399.99,
    currency: "TRY",
    image: "https://i.ibb.co/CtyRZ6r/shoe2.png",
    description:
      "They stop you from indulging in poorly ought out metaphorsy about driving and keep you focused one the overall structure of your post. Outlines keep you honest.",
    details: {
      brand: "Adidas",
      model: "Balance",
      sku: "DAS3535",
      color: "Black",
      collection: "2020 Spring",
      stock: 110,
    },
  },
];
