import React, { useState } from "react";
import items from "./data";
import Title from "./Title";
import Menu from "./menu";
import menu from "./data";
import Categories from "./Categories";

const allCategories = ['home', ...new Set(menu.map((item) => item.category))]

const App = () => {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)
  const filterItems = (category) => {
    console.log(category)
    const newItems = menu.filter((item) => item.category === category)
    setMenuItems(newItems)
    if (category === 'home') {
      setMenuItems(menu)
      return
    }
  }
  
  return(
      <main>
        <section className="menu">
          <Title text = " Maxis Kitchen" />
          <Categories categories={categories} filterItems={filterItems} />
          <Menu items={menuItems} />
          
        </section>
     </main>
  )
}
export default App

