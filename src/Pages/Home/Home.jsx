import { IoBagHandleOutline } from 'react-icons/io5';
import collection from '../../../public/collection.json'



const Home = () => {

    return (
        <div className='p-4'>
            <h1 className="text-2xl mb-5">Our Products</h1>
            <div className='ml-5'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {
                        collection.map(item => <div key={item.id} className="card bg-base-100 border rounded-none">
                            <figure className="px-5 pt-5 rounded-none">
                                <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="" />
                            </figure>
                            <div className="card-body p-5 items-center text-center flex flex-grow">
                                <h2 className="font-bold">{item.title}</h2>
                                <div className='flex items-center gap-4'>
                                    <del>${item.previous_price}</del>
                                    <p>{item.new_price}</p>
                                </div>
                                <div className="card-actions flex items-end justify-end w-full">
                                    <button className="btn btn-sm rounded-none hover:bg-black hover:text-white"><IoBagHandleOutline className="text-2xl" /></button>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;