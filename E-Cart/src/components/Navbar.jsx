import cartimg from '../img/cartimg.png';
function Navbar(size){

    return(
<div>
    <nav className="navbar">
       <h1>E-Cart</h1>
       <img src={cartimg}  alt="" />
       <p className='size'>{size.products}</p>


    </nav>
</div>
    )

}

export default Navbar;