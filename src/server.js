import { createServer, Model } from "miragejs";
import shoe5 from "./assets/images/shoe5.jpg";
import shoe6 from "./assets/images/shoe6.jpg";
import shoe7 from "./assets/images/shoe7.jpg";
import shoe8 from "./assets/images/shoe8.jpg";
import shoe9 from "./assets/images/shoe9.jpg";
import shoe10 from "./assets/images/shoe10.jpg";
import shoe11 from "./assets/images/shoe11.jpg";
import shoe12 from "./assets/images/shoe12.jpg";
import shirt2 from "./assets/images/t-shirt2.jpg";
import shirt3 from "./assets/images/t-shirt3.jpg";
import shirt4 from "./assets/images/t-shirt4.jpg";
import shirt5 from "./assets/images/t-shirt5.jpg";
import shirt6 from "./assets/images/t-shirt6.jpg";
import shirt7 from "./assets/images/t-shirt7.jpg";
import shirt8 from "./assets/images/t-shirt8.jpg";
import hoodie1 from "./assets/images/hoodie1.jpg";
import hoodie4 from "./assets/images/hoodie4.jpg";
import hoodie6 from "./assets/images/hoodie6.jpg";
import hoodie7 from "./assets/images/hoodie7.jpg";
import jeans3 from "./assets/images/jeans3.jpg";
import jeans7 from "./assets/images/jeans7.jpg";
import jeans8 from "./assets/images/jeans8.jpg";
import jacket1 from "./assets/images/jacket1.jpg";
import jacket2 from "./assets/images/jacket2.jpg";
import jacket3 from "./assets/images/jacket3.jpg";
import jacket4 from "./assets/images/jacket4.jpg";
import jacket6 from "./assets/images/jacket6.jpg";
import bag1 from "./assets/images/bag1.jpg";
import bag2 from "./assets/images/bag2.jpg";
import bag3 from "./assets/images/bag3.jpg";
import bag5 from "./assets/images/bag5.jpg";
import bag6 from "./assets/images/bag6.jpg";
import bag7 from "./assets/images/bag7.jpg";
import bag8 from "./assets/images/bag8.jpg";
import suit1 from "./assets/images/suit1.jpg";
import suit2 from "./assets/images/suit2.jpg";
import suit3 from "./assets/images/suit3.jpg";
import suit4 from "./assets/images/suit4.jpg";
import suit5 from "./assets/images/suit5.jpg";
import suit7 from "./assets/images/suit7.jpg";
import suit8 from "./assets/images/suit8.jpg";

export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,

    models: {
      product: Model,
    },

    seeds(server) {
      server.create("product", {
        id: "2",
        img: shirt2,
        name: "Casual T-Shrit 2",
        text: "Fashion never stops. There is always the new project, the new opportunity. The important thing is to take your time and not get stressed. I just want to do what I do.",
        type: "T-Shirts",
        size: ["M", "L", "XL"],
        color: ["black", "red", "brown"],
        gender: "male",
        price: 55,
      });
      server.create("product", {
        id: "3",
        img: shirt3,
        name: "Casual T-Shrit 3",
        text: "Fashion never stops. There is always the new project, the new opportunity. The important thing is to take your time and not get stressed. I just want to do what I do.",
        type: "T-Shirts",
        size: ["L", "XL"],
        color: ["brown", "gray", "yellow"],
        gender: "female",
        price: 75,
      });
      server.create("product", {
        id: "4",
        img: shirt4,
        name: "Casual T-Shrit 4",
        text: "Fashion never stops. There is always the new project, the new opportunity. The important thing is to take your time and not get stressed. I just want to do what I do.",
        type: "T-Shirts",
        size: ["M", "L", "XL"],
        color: ["gray", "orange", "blue"],
        gender: "female",
        price: 25,
      });
      server.create("product", {
        id: "5",
        img: shirt5,
        name: "Casual T-Shrit 5",
        text: "Fashion never stops. There is always the new project, the new opportunity. The important thing is to take your time and not get stressed. I just want to do what I do.",
        type: "T-Shirts",
        size: ["M", "L", "XL"],
        color: ["black", "brown", "blue"],
        gender: "female",
        price: 15,
      });
      server.create("product", {
        id: "6",
        img: shirt6,
        name: "Casual T-Shrit 6",
        text: "Fashion never stops. There is always the new project, the new opportunity. The important thing is to take your time and not get stressed. I just want to do what I do.",
        type: "T-Shirts",
        size: ["M", "L", "XL"],
        color: ["gray", "purple", "yellow"],
        gender: "female",
        price: 25,
      });
      server.create("product", {
        id: "7",
        img: shirt7,
        name: "Casual T-Shrit 7",
        text: "Fashion never stops. There is always the new project, the new opportunity. The important thing is to take your time and not get stressed. I just want to do what I do.",
        type: "T-Shirts",
        size: ["M", "L", "XL"],
        color: ["black", "orange", "blue"],
        gender: "male",
        price: 25,
      });
      server.create("product", {
        id: "8",
        img: shirt8,
        name: "Casual T-Shrit 8",
        text: "Fashion never stops. There is always the new project, the new opportunity. The important thing is to take your time and not get stressed. I just want to do what I do.",
        type: "T-Shirts",
        size: ["M", "XL"],
        color: ["gray", "red", "blue"],
        gender: "male",
        price: 35,
      });
      server.create("product", {
        id: "9",
        img: hoodie1,
        name: "Casual Hoodie 1",
        text: "Fashion never stops. There is always the new project, the new opportunity. The important thing is to take your time and not get stressed. I just want to do what I do.",
        type: "Hoodies",
        size: ["S", "L", "XL"],
        color: ["blue", "red", "green"],
        gender: "female",
        price: 85,
      });
      server.create("product", {
        id: "12",
        img: hoodie4,
        name: "Casual Hoodie 4",
        text: "Fashion never stops. There is always the new project, the new opportunity. The important thing is to take your time and not get stressed. I just want to do what I do.",
        type: "Hoodies",
        size: ["S", "XL"],
        color: ["gray", "blue", "red"],
        gender: "male",
        price: 125,
      });
      server.create("product", {
        id: "14",
        img: hoodie6,
        name: "Casual Hoodie 6",
        text: "Fashion never stops. There is always the new project, the new opportunity. The important thing is to take your time and not get stressed. I just want to do what I do.",
        type: "Hoodies",
        size: ["S", "XL"],
        color: ["gray", "yellow", "blue"],
        gender: "male",
        price: 125,
      });
      server.create("product", {
        id: "15",
        img: hoodie7,
        name: "Casual Hoodie 7",
        text: "Fashion never stops. There is always the new project, the new opportunity. The important thing is to take your time and not get stressed. I just want to do what I do.",
        type: "Hoodies",
        size: ["S", "M", "L", "XL"],
        color: ["black", "blue"],
        gender: "male",
        price: 450,
      });
      server.create("product", {
        id: "17",
        img: shoe5,
        name: "Casual Shoes 1",
        text: "Fashion never stops. There is always the new project, the new opportunity. The important thing is to take your time and not get stressed. I just want to do what I do.",
        type: "Shoes",
        size: ["40", "42", "44", "46"],
        color: ["black", "gray"],
        gender: "male",
        price: 200,
      });
      server.create("product", {
        id: "18",
        img: shoe6,
        name: "Casual Shoes 2",
        text: "Fashion never stops. There is always the new project, the new opportunity. The important thing is to take your time and not get stressed. I just want to do what I do.",
        type: "Shoes",
        size: ["40", "42", "44", "46"],
        color: ["brown", "gray"],
        gender: "female",
        price: 250,
      });
      server.create("product", {
        id: "19",
        img: shoe7,
        name: "Casual Shoes 3",
        text: "Fashion never stops. There is always the new project, the new opportunity. The important thing is to take your time and not get stressed. I just want to do what I do.",
        type: "Shoes",
        size: ["36", "38", "40", "42"],
        color: ["black", "gray", "blue"],
        gender: "female",
        price: 685,
      });
      server.create("product", {
        id: "20",
        img: shoe8,
        name: "Casual Shoes 4",
        text: "Fashion never stops. There is always the new project, the new opportunity. The important thing is to take your time and not get stressed. I just want to do what I do.",
        type: "Shoes",
        size: ["36", "38", "40", "42"],
        color: ["black", "gray"],
        gender: "male",
        price: 255,
      });
      server.create("product", {
        id: "21",
        img: shoe9,
        name: "Casual Shoes 5",
        text: "Fashion never stops. There is always the new project, the new opportunity. The important thing is to take your time and not get stressed. I just want to do what I do.",
        type: "Shoes",
        size: ["36", "38", "40", "42"],
        color: ["purple", "gray", "black"],
        gender: "male",
        price: 355,
      });
      server.create("product", {
        id: "22",
        img: shoe10,
        name: "Casual Shoes 6",
        text: "Fashion never stops. There is always the new project, the new opportunity. The important thing is to take your time and not get stressed. I just want to do what I do.",
        type: "Shoes",
        size: ["36", "38", "40", "42"],
        color: ["purple", "gray", "black"],
        gender: "male",
        price: 200,
      });
      server.create("product", {
        id: "23",
        img: shoe11,
        name: "Casual Shoes 7",
        text: "Fashion never stops. There is always the new project, the new opportunity. The important thing is to take your time and not get stressed. I just want to do what I do.",
        type: "Shoes",
        size: ["36", "38", "40", "42"],
        color: ["purple", "green", "black"],
        gender: "male",
        price: 100,
      });
      server.create("product", {
        id: "24",
        img: shoe12,
        name: "Casual Shoes 8",
        text: "Fashion never stops. There is always the new project, the new opportunity. The important thing is to take your time and not get stressed. I just want to do what I do.",
        type: "Shoes",
        size: ["36", "38", "40", "42"],
        color: ["purple", "green", "black"],
        gender: "male",
        price: 135,
      });
      server.create("product", {
        id: "35",
        img: jeans3,
        name: "Casual Jeans 3",
        text: "Fashion never stops. There is always the new project, the new opportunity. The important thing is to take your time and not get stressed. I just want to do what I do.",
        type: "Jeans",
        size: ["M", "L", "XL"],
        color: ["blue", "black"],
        gender: "male",
        price: 95,
      });
      server.create("product", {
        id: "39",
        img: jeans7,
        name: "Casual Jeans 7",
        text: "Fashion never stops. There is always the new project, the new opportunity. The important thing is to take your time and not get stressed. I just want to do what I do.",
        type: "Jeans",
        size: ["M", "L", "XL"],
        color: ["blue", "black"],
        gender: "male",
        price: 180,
      });
      server.create("product", {
        id: "40",
        img: jeans8,
        name: "Casual Jeans 8",
        text: "Fashion never stops. There is always the new project, the new opportunity. The important thing is to take your time and not get stressed. I just want to do what I do.",
        type: "Jeans",
        size: ["M", "L", "XL"],
        color: ["blue", "black"],
        gender: "male",
        price: 160,
      });
      server.create("product", {
        id: "41",
        img: jacket1,
        name: "Casual Jacket 1",
        text: "Fashion never stops. There is always the new project, the new opportunity. The important thing is to take your time and not get stressed. I just want to do what I do.",
        type: "Jackets",
        size: ["M", "L", "XL"],
        color: ["black", "blue"],
        gender: "male",
        price: 400,
      });
      server.create("product", {
        id: "42",
        img: jacket2,
        name: "Casual Jacket 2",
        text: "Fashion never stops. There is always the new project, the new opportunity. The important thing is to take your time and not get stressed. I just want to do what I do.",
        type: "Jackets",
        size: ["S", "L", "XL"],
        color: ["gray", "brown"],
        gender: "male",
        price: 255,
      });
      server.create("product", {
        id: "43",
        img: jacket3,
        name: "Casual Jacket 3",
        text: "Fashion never stops. There is always the new project, the new opportunity. The important thing is to take your time and not get stressed. I just want to do what I do.",
        type: "Jackets",
        size: ["S", "M"],
        color: ["gray", "brown"],
        gender: "male",
        price: 300,
      });
      server.create("product", {
        id: "44",
        img: jacket4,
        name: "Casual Jacket 4",
        text: "Fashion never stops. There is always the new project, the new opportunity. The important thing is to take your time and not get stressed. I just want to do what I do.",
        type: "Jackets",
        size: ["S", "M", "L"],
        color: ["gray", "brown"],
        gender: "male",
        price: 185,
      });
      server.create("product", {
        id: "46",
        img: jacket6,
        name: "Casual Jacket 6",
        text: "Fashion never stops. There is always the new project, the new opportunity. The important thing is to take your time and not get stressed. I just want to do what I do.",
        type: "Jackets",
        size: ["S", "M", "XL"],
        color: ["gray", "brown", "black"],
        gender: "male",
        price: 285,
      });
      server.create("product", {
        id: "49",
        img: bag1,
        name: "Casual Bag 1",
        text: "Fashion never stops. There is always the new project, the new opportunity. The important thing is to take your time and not get stressed. I just want to do what I do.",
        type: "Bags",
        color: ["black", "blue", "red"],
        gender: "female",
        price: 500,
      });
      server.create("product", {
        id: "50",
        img: bag2,
        name: "Casual Bag 2",
        text: "Fashion never stops. There is always the new project, the new opportunity. The important thing is to take your time and not get stressed. I just want to do what I do.",
        type: "Bags",
        color: ["green", "red", "blue"],
        gender: "male",
        price: 85,
      });
      server.create("product", {
        id: "51",
        img: bag3,
        name: "Casual Bag 3",
        text: "Fashion never stops. There is always the new project, the new opportunity. The important thing is to take your time and not get stressed. I just want to do what I do.",
        type: "Bags",
        color: ["brown", "blue", "orange"],
        gender: "female",
        price: 200,
      });
      server.create("product", {
        id: "53",
        img: bag5,
        name: "Casual Bag 5",
        text: "Fashion never stops. There is always the new project, the new opportunity. The important thing is to take your time and not get stressed. I just want to do what I do.",
        type: "Bags",
        color: ["yellow", "blue", "black"],
        gender: "female",
        price: 40,
      });
      server.create("product", {
        id: "54",
        img: bag6,
        name: "Casual Bag 6",
        text: "Fashion never stops. There is always the new project, the new opportunity. The important thing is to take your time and not get stressed. I just want to do what I do.",
        type: "Bags",
        color: ["blue", "black", "orange"],
        gender: "female",
        price: 400,
      });
      server.create("product", {
        id: "55",
        img: bag7,
        name: "Casual Bag 7",
        text: "Fashion never stops. There is always the new project, the new opportunity. The important thing is to take your time and not get stressed. I just want to do what I do.",
        type: "Bags",
        color: ["blue", "black", "orange"],
        gender: "female",
        price: 355,
      });
      server.create("product", {
        id: "56",
        img: bag8,
        name: "Casual Bag 8",
        text: "Fashion never stops. There is always the new project, the new opportunity. The important thing is to take your time and not get stressed. I just want to do what I do.",
        type: "Bags",
        color: ["blue", "green", "red"],
        gender: "female",
        price: 100,
      });
      server.create("product", {
        id: "57",
        img: suit2,
        name: "Casual Suit 2",
        text: "Fashion never stops. There is always the new project, the new opportunity. The important thing is to take your time and not get stressed. I just want to do what I do.",
        type: "Suits",
        size: ["S", "M", "L"],
        color: ["purple", "orange", "gray"],
        gender: "male",
        price: 400,
      });
      server.create("product", {
        id: "58",
        img: suit3,
        name: "Casual Suit 3",
        text: "Fashion never stops. There is always the new project, the new opportunity. The important thing is to take your time and not get stressed. I just want to do what I do.",
        type: "Suits",
        size: ["M", "L", "XL"],
        color: ["purple", "orange", "gray"],
        gender: "male",
        price: 200,
      });
      server.create("product", {
        id: "59",
        img: suit4,
        name: "Casual Suit 4",
        text: "Fashion never stops. There is always the new project, the new opportunity. The important thing is to take your time and not get stressed. I just want to do what I do.",
        type: "Suits",
        size: ["L", "XL"],
        color: ["brown", "orange", "black"],
        gender: "male",
        price: 600,
      });
      server.create("product", {
        id: "60",
        img: suit5,
        name: "Casual Suit 5",
        text: "Fashion never stops. There is always the new project, the new opportunity. The important thing is to take your time and not get stressed. I just want to do what I do.",
        type: "Suits",
        size: ["L", "XL"],
        color: ["black", "blue", "red"],
        gender: "male",
        price: 750,
      });
      server.create("product", {
        id: "62",
        img: suit7,
        name: "Casual Suit 7",
        text: "Fashion never stops. There is always the new project, the new opportunity. The important thing is to take your time and not get stressed. I just want to do what I do.",
        type: "Suits",
        size: ["L", "XL"],
        color: ["red", "blue", "black"],
        gender: "male",
        price: 700,
      });
      server.create("product", {
        id: "63",
        img: suit8,
        name: "Casual Suit 8",
        text: "Fashion never stops. There is always the new project, the new opportunity. The important thing is to take your time and not get stressed. I just want to do what I do.",
        type: "Suits",
        size: ["S", "M", "XL"],
        color: ["blue", "green", "brown"],
        gender: "male",
        price: 550,
      });
      server.create("product", {
        id: "64",
        img: suit1,
        name: "Casual Suit 1",
        text: "Fashion never stops. There is always the new project, the new opportunity. The important thing is to take your time and not get stressed. I just want to do what I do.",
        type: "Suits",
        size: ["S", "M", "L"],
        color: ["black", "gray", "orange"],
        gender: "male",
        price: 300,
      });
    },

    routes() {
      this.namespace = "api";

      this.get("/products", (schema) => {
        return schema.products.all();
      });

      this.get("/products/:id", (schema, request) => {
        let id = request.params.id;

        return schema.products.find(id);
      });

      this.post("/products", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);

        return schema.products.create(attrs);
      });
    },
  });

  return server;
}
