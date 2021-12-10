export let products: Iproducts[] = [
  {
    name: "Cat Sandwich",
    url: "https://i.ibb.co/1fKFDcB/image.jpg",
    wishList: false,
    price: {
      s: 10,
      m: 20,
      l: 30,
    },
  },
  {
    name: "Cat Tub",
    url: "https://i.ibb.co/TBv3gf8/1.jpg",
    wishList: false,
    price: {
      s: 20,
      m: 33,
      l: 100,
    },
  },
  {
    name: "Generous Dog",
    url: "https://i.ibb.co/B4BfBWD/2.jpg",
    wishList: false,
    price: {
      s: 13,
      m: 27,
      l: 45,
    },
  },
  {
    name: "Depressed Dog",
    url: "https://i.ibb.co/pWVBqmn/3.jpg",
    wishList: false,
    price: {
      s: 8,
      m: 30,
      l: 45,
    },
  },
  {
    name: "Exotic Dog",
    url: "https://i.ibb.co/vzgHDBr/4.jpg",
    wishList: false,
    price: {
      s: 15,
      m: 35,
      l: 60,
    },
  },
  {
    name: "Silent Dog",
    url: "https://i.ibb.co/fxJVc9v/5.jpg",
    wishList: false,
    price: {
      s: 100,
      m: 200,
      l: 300,
    },
  },
  {
    name: "Massage Dog",
    url: "https://i.ibb.co/TYj56Fs/6.jpg",
    wishList: false,
    price: {
      s: 19,
      m: 37,
      l: 45,
    },
  },
  {
    name: "Clean Dog",
    url: "https://i.ibb.co/WF264XK/7.jpg",
    wishList: false,
    price: {
      s: 23,
      m: 54,
      l: 76,
    },
  },
  {
    name: "Wrinkly Depressed Dog",
    url: "https://i.ibb.co/N30FYMP/8.jpg",
    wishList: false,
    price: {
      s: 9,
      m: 21,
      l: 32,
    },
  },
  {
    name: "Hipster Dog",
    url: "https://i.ibb.co/mSsk0C1/9.jpg",
    wishList: false,
    price: {
      s: 105,
      m: 267,
      l: 303,
    },
  },
  {
    name: "Fast Rabbit",
    url: "https://i.ibb.co/6tLQKsB/10.jpg",
    wishList: false,
    price: {
      s: 12,
      m: 27,
      l: 33,
    },
  },
  {
    name: "Dog Dealer",
    url: "https://i.ibb.co/dJq0z70/11.jpg",
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

class StorageProduct {
  Iproduct: Iproducts;
  size: string;
  amount: number;
  constructor(Iproduct: Iproducts, size: string, amount: number) {
    this.Iproduct = Iproduct;
    this.size = size;
    this.amount = amount;
  }
}
