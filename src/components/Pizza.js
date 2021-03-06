import React from "react"

const Pizza = ({pizza, updateSelectedPizza}) => {

  const handleEdit =  () => {
    updateSelectedPizza(pizza)

  }

  
  return(

    <tr>
      <td>{pizza.topping}</td>
      <td>{pizza.size}</td>
      <td>{pizza.vegetarian?"true":"false"}</td>
      <td><button type="button" className="btn btn-primary" onClick={handleEdit}>Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
