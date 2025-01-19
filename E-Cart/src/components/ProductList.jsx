function ProductsList({products}){
    return(
<div>
 <ul>
{products.map((products)=>(
    <li className="productslist"    key={products.id}>
        {products.name} - {products.price}
         <button className="Checkout">Checkout</button>

    </li>
))}
</ul>

</div>


    )
}

export default ProductsList;