export let products: Iproducts[] = [
  {
    name: "Merge Conflicts",
    url: "https://i.ibb.co/1fKFDcB/image.jpg",
    wishList: false,
    price: {
      s: 10,
      m: 20,
      l: 30,
    },
  },
  {
    name: "Parcel Error",
    url: "https://i.ibb.co/TBv3gf8/1.jpg",
    wishList: false,
    price: {
      s: 20,
      m: 33,
      l: 100,
    },
  },
  {
    name: "Supportive Teammate",
    url: "https://i.ibb.co/B4BfBWD/2.jpg",
    wishList: false,
    price: {
      s: 13,
      m: 27,
      l: 45,
    },
  },
  {
    name: "Undefined",
    url: "https://i.ibb.co/pWVBqmn/3.jpg",
    wishList: false,
    price: {
      s: 8,
      m: 30,
      l: 45,
    },
  },
  {
    name: "Typescript",
    url: "https://i.ibb.co/vzgHDBr/4.jpg",
    wishList: false,
    price: {
      s: 15,
      m: 35,
      l: 60,
    },
  },
  {
    name: "Skipped Feature-Branch",
    url: "https://i.ibb.co/fxJVc9v/5.jpg",
    wishList: false,
    price: {
      s: 100,
      m: 200,
      l: 300,
    },
  },
  {
    name: "Type: any",
    url: "https://i.ibb.co/cJ1pLF5/4pexels-anna-shvets-4588027.jpg",
    wishList: false,
    price: {
      s: 19,
      m: 37,
      l: 45,
    },
  },
  {
    name: "Structured Code",
    url: "https://i.ibb.co/WF264XK/7.jpg",
    wishList: false,
    price: {
      s: 23,
      m: 54,
      l: 76,
    },
  },
  {
    name: "Cannot Read Properties Of Null",
    url: "https://i.ibb.co/KNp2fFh/2pexels-anna-shvets-4588455.jpg",
    wishList: false,
    price: {
      s: 9,
      m: 21,
      l: 32,
    },
  },
  {
    name: ".splice(i,1)",
    url: "https://i.ibb.co/nfrLgqF/1pexels-anna-shvets-4588441.jpg",
    wishList: false,
    price: {
      s: 105,
      m: 267,
      l: 303,
    },
  },
  {
    name: "Scrum Master",
    url: "https://i.ibb.co/6tLQKsB/10.jpg",
    wishList: false,
    price: {
      s: 12,
      m: 27,
      l: 33,
    },
  },
  {
    name: "Passed A Cypress Test",
    url: "https://i.ibb.co/SvBnLFR/3pexels-anna-shvets-4580745.jpg",
    wishList: false,
    price: {
      s: 4,
      m: 16,
      l: 20,
    },
  },
];

export interface Iprice {
  s: number;
  m: number;
  l: number;
}

export interface Iproducts {
  name: string;
  url: string;
  wishList: boolean;
  price: Iprice;
}

export class StorageProduct {
  Iproduct: Iproducts;
  size: string;
  amount: number;
  constructor(Iproduct: Iproducts, size: string, amount: number) {
    this.Iproduct = Iproduct;
    this.size = size;
    this.amount = amount;
  }
}
