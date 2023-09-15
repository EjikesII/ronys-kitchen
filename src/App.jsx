import React, { useState } from "react";
import items from "./data";
import Title from "./Title";
import Menu from "./menu";
import menu from "./data";
import Categories from "./Categories";

const allCategories = ['all', ...new Set(menu.map((item) => item.category))]

const App = () => {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)
  
  return(
      <main>
        <section className="menu">
          <Title text = " Rony's Kitchen" />
          <Categories categories={categories} />
          <Menu items={menuItems} />
          
        </section>
     </main>
  )
}
export default App

