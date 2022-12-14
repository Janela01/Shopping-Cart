import { StoreItemProps } from "../components/StoreItem";
const items: StoreItemProps[] = [
      {
            name: "Macbook Air 13 M1 256GB",
            price: 3199
      },
      {
            name: "IPhone 11 | 64GB Black",
            price: 1499
      },
      {
            name: "Samsung SM-R180 Buds Live",
            price: 249
      },
      {
            name: "Xiaomi Mi Watch Lite",
            price: 129
      },
      {
            name: "JBL Charge 5 Blue",
            price: 459
      },
      {
            name: "Xiaomi MI 43 L43M5-5ARU",
            price: 949
      },
      {
            name: "GoPro Hero 10",
            price: 1499
      },
      {
            name: "Crosley Coda Turntable",
            price: 1099
      },
      {
            name: "Xbox Series X 1TB",
            price: 1799
      },
      {
            name: "Audio-Technica AT-LP5X",
            price: 1399
      },
      {
            name: "Sony WH-1000XM5Headset",
            price: 1299
      },
      {
            name: "Marshall Woburn ll",
            price: 1699
      },
      {
            name: "MSI Vector GP76",
            price: 14999
      }
]
let amount = items.length;
for (let i = 0; i < amount; i++) {
      items[i].id = i;
      items[i].imgUrl = `/images/products/${i + 1}.jpeg`;
}
export default items;