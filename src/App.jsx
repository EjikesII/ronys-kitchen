import React, { useState } from "react";
import items from "./data";
import Title from "./Title";
import Menu from "./menu";


const App = () => {
  const [menuItems, setMenuItems] = useState(items)
  return(
      <main>
        <section className="menu">
          <Title text = "Rony's Kitchen" />
          <Menu items={menuItems} />
        </section>
     </main>
  )
}
export default App

