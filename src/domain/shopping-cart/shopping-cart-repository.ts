import { Article } from "../article/article";
import { ShoppingCart } from "./shopping-cart";

export interface ShoppingCartRepository {
  find(): ShoppingCart
  createArticle(article: Article): Article
  removeArticle(article: Article): void
}