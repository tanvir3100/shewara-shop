import collection from '../../../public/collection.json';
import { RiDeleteBin6Line } from "react-icons/ri";


const DashBoard = () => {
    return (
        <div className='flex'>
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
                            collection.map(item => <div key={item.id} className="bg-base-100 shadow-xl p-1 lg:p-6">
                                <div className="flex justify-between items-center">
                                    <img src={item.image} alt="Movie" className='w-20 lg:w-40 h-16 lg:h-28' />
                                    <h2 className="text-sm lg:card-title">{item.title}</h2>
                                    <p>{item.new_price}</p>
                                    <button className="btn btn-sm rounded-none bg-red-600 hover:bg-red-700 hover:text-black text-white text-2xl"><RiDeleteBin6Line /></button>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
            <div className='h-[100vh] flex justify-center items-center ml-10'>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 rounded-none">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Total Price</span>
                            </label>
                            <input type="Total Price" placeholder="Total Price" className="input input-bordered rounded-none" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Total Price</span>
                            </label>
                            <input type="Quintity" placeholder="Quintity" className="input input-bordered rounded-none" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn rounded-none bg-black text-white hover:bg-black hover:text-white">Pay</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;