import React from 'react'
import { useNavigate } from 'react-router-dom';

function Product({product}) {
  const {id, name, price} = product;
  const navigate = useNavigate(); 
  // Action olduğunda belirtilen URL e yönlendirme yapmamızı sağlayan Hook

  return (
    <div>
        <div style={{marginBottom:'50px', backgroundColor:'lightgray'}}>
            <h2>Ürün Detayı</h2>
            <h3>İsim: {name}</h3>
            <h3>Fiyatı: {price}</h3>
            <button onClick={()=> navigate("/product-details/" + id)}>Ürüne Git</button>
        </div>
    </div>
  )
}

export default Product