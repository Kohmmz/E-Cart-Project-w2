import img from '../img/Talon.jpeg';
function ProductsList({products}){
    return(
<div>
 <ul>
{products.map((products)=>(
    <li className="productslist" key={products.id}>
        <img src={img} className='img' alt="" />
        Name:{products.name} Price:${products.price}
        <button className="Checkout">Checkout</button>

    </li>
))}
</ul>

</div>


    )
}

export default ProductsList;