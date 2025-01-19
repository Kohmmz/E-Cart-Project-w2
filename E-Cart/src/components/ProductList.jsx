function ProductsList({Products}){
    return(
<div>
 <ul>
{Products.map((Products)=>(
    <li key={Products.id}>
        {Products.name} - {Products.price}
    </li>
))}
</ul>
</div>


    )
}

export default ProductsList;