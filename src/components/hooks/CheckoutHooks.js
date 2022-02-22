import { useState } from "react"

const CheckoutHooks = () => {
  const [cart, setCart] = useState([]);
  console.log(setCart)


  return [cart]
}

export default CheckoutHooks;