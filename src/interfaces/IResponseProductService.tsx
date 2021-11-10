import { IAuthor } from "./IAuthor";
import { IProduct, IProductDetail } from "./IProduct";

export interface IResponseProductList {
  author: IAuthor
  categories: Array<string>
  items: Array<IProduct>
}

export interface IResponseProduct {
  author: IAuthor
  item: IProductDetail
}
