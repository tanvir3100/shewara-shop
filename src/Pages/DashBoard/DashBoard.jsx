import { useState } from 'react';
// import collection from '../../../public/collection.json';
import { RiDeleteBin6Line } from "react-icons/ri";
import useCard from '../../Hooks/useCard';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../Hooks/useAxiosPublic';


const DashBoard = () => {
    const [totalPrice, setTotalPrice] = useState(0);
    const axiosPublic = useAxiosPublic();
    const [cards, refetch] = useCard();
    // Function to calculate total price
    const calculateTotalPrice = () => {
        let total = 0;
        for (const item of cards) {
            total += item.new_price;
        }
        setTotalPrice(total);
    };

    // Call calculateTotalPrice on initial render
    useState(() => {
        calculateTotalPrice();
    }, [cards]);

    const handleDelete = async item => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosPublic.delete(`/cards/${item._id}`)
                console.log(res.data)
                if (res.data.deletedCount > 0) {
                    refetch
                    Swal.fire({
                        title: "Deleted!",
                        text: `has been deleted.`,
                        icon: "success"
                    });
                }
            }
        });
    }


    return (
        <div className='flex flex-col-reverse lg:flex-row'>
            <div className="p-5">
                <h1 className="text-3xl text-center my-5">Your Cart</h1>
                <div>
                    <div className='hidden lg:block'>
                        <div className='bg-base-200 p-4 px-10 flex justify-between items-center mb-5 shadow-xl'>
                            <p>Image</p>
                            <p>Product Name</p>
                            <p>Price</p>
                            <p>Option</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        {
                            cards?.map(item => <div key={item._id} className="bg-base-100 shadow-xl p-1 lg:p-6">
                                <div className="flex justify-between items-center">
                                    <img src={item.image} alt="Movie" className='w-20 lg:w-40 h-16 lg:h-28' />
                                    <h2 className="text-sm lg:card-title">{item.title}</h2>
                                    <p>{item.new_price}</p>
                                    <button onClick={() => handleDelete(item)} className="btn btn-sm rounded-none bg-red-600 hover:bg-red-700 hover:text-black text-white text-2xl"><RiDeleteBin6Line /></button>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
            <div className='h-[100vh] flex justify-center items-center'>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 rounded-none">
                    <form className="card-body">
                        <div className="form-control">
                            <h1 className='text-xl lg:text-2xl mb-2 text-end'>Total Price {totalPrice ? totalPrice.toFixed(2) : '00.00'} BDT</h1>
                            <p className='text-sm text-slate-400 text-end'>Taxes, discounts and shipping calculated at checkout</p>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn rounded-none bg-black text-white hover:bg-black hover:text-white">Check Out</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;