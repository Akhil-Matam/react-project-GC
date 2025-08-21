import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ShoppingHome } from "./shopping-home";
import { ShoppingProducts } from "./shopping-products";
import { ShoppingDetails } from "./shopping-details";

export function ShoppingIndex(){
    return(
        <div className="container-fluid">
            <BrowserRouter>
             <header className="p-2 mt-2 border border-1 border-dark">
                <div className="text-center">
                    <span className="fs-4 fw-bold">Shopping</span>
                </div>
              </header>
              <section className="mt-4">
                  <Routes>
                      <Route path="/" element={<ShoppingHome />}  />
                      <Route path="products/:category" element={<ShoppingProducts />}>
                         <Route path="details/:id" element={<ShoppingDetails />} />
                      </Route>
                      
                  </Routes>
              </section>
            </BrowserRouter>
        </div>
    )
}