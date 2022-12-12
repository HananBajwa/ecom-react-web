import React from "react"
import { Details } from "./details/Details"
import { Product } from "./product/Product"
import { TopProduct } from "./top/TopProduct"

export const Home = () => {
  return (
    <>
          <Product />
      <TopProduct />
    </>
  )
}
