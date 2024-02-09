import { IoBagHandleOutline } from 'react-icons/io5';

import { useState } from 'react';
import useProducts from '../../Hooks/useProducts';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import useCard from '../../Hooks/useCard';


const Home = () => {
    // const [filterBrand, setFilterBrand] = useState(null);
    const [products] = useProducts();
    const [filterCategory, setFilterCategory] = useState(null);
    const [sortOption, setSortOption] = useState(null);
    const axiosPublic = useAxiosPublic();
    const [, refetch] = useCard();

    const handleClick = (brand, category) => {
        // setFilterBrand(brand ? brand.toLowerCase() : null);
        setFilterCategory(category ? category.toLowerCase() : null);
    };

    const filteredCollection = products.filter(item => {
        // const brandMatch = !filterBrand || item.brand_name.toLowerCase() === filterBrand;
        const categoryMatch = !filterCategory || item.category.toLowerCase() === filterCategory;
        return categoryMatch;
        // return  brandMatch && categoryMatch;
    });

    const handleSort = e => {
        const selected = e.target.value;
        setSortOption(selected)
    }

    let sortedCollection = [...filteredCollection];
    if (sortOption === 'High to Low') {
        sortedCollection.sort((a, b) => b.new_price - a.new_price);
    } else if (sortOption === 'Low to High') {
        sortedCollection.sort((a, b) => a.new_price - b.new_price);
    }


    const handleAddedProduct = (item) => {
        Swal.fire({
            title: "Do you want to Add to cart?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Add To Cart",
            denyButtonText: `Don't Add`
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                axiosPublic.post('/cards', item)
                    .then(res => {
                        console.log(res.data)
                    })
                Swal.fire("Saved!", "", "success");
                refetch();
            } else if (result.isDenied) {
                Swal.fire("Product is successfully add to cart", "", "info");
            }
        });
    }




    return (
        <div className='p-4'>
            <h1 className="text-2xl">Our Products</h1>
            <div className='ml-5'>
                <div className='flex lg:justify-between items-center my-5 '>
                    {/* <div className='flex items-center gap-4 my-5'>
                        <button onClick={() => handleClick()} className='btn btn-sm rounded-none'>All</button>
                        <button onClick={() => handleClick('Nike')} className='btn btn-sm rounded-none'>Nike</button>
                        <button onClick={() => handleClick('Adidas')} className='btn btn-sm rounded-none'>Adidas</button>
                        <button onClick={() => handleClick('Jordan')} className='btn btn-sm rounded-none'>Jordan</button>
                    </div> */}
                    <div className="flex gap-1 lg:gap-4 items-center">
                        <button onClick={() => handleClick()} className='btn btn-sm rounded-none'>All</button>
                        <button onClick={() => handleClick(null, 'shoes')} className="btn rounded-none btn-sm">Shoes</button>
                        <button onClick={() => handleClick(null, 'caps')} className="btn rounded-none btn-sm">Caps</button>
                        <button onClick={() => handleClick(null, 'glasses')} className="btn rounded-none btn-sm">Glasses</button>
                    </div>
                </div>
                <div className='mb-5'>
                    <label className="form-control w-full max-w-xs rounded-none">
                        <div className="label">
                            <span className="label-text">Pick the One You need</span>
                        </div>
                        <select onChange={handleSort} className="select select-bordered rounded-none">
                            <option disabled selected>Pick one</option>
                            <option>High to Low</option>
                            <option>Low to High</option>
                        </select>
                    </label>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {sortedCollection.map(item => (
                        <div key={item.id} className="card bg-base-100 border rounded-none">
                            <figure className="px-4 pt-5 rounded-none">
                                <img src={item.image} alt="Product" className="h-36 w-full" />
                            </figure>
                            <div className="card-body p-5 items-center text-center flex flex-grow">
                                <h2 className="font-bold">{item.title}</h2>
                                <div className='flex items-center gap-4'>
                                    <del>${item.previous_price}</del>
                                    <p>{item.new_price}</p>
                                </div>
                                <div className="card-actions flex items-end justify-end w-full">
                                    <button onClick={() => handleAddedProduct(item)} className="btn btn-sm rounded-none hover:bg-black hover:text-white border-2 border-black">
                                        <IoBagHandleOutline className="text-2xl" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
