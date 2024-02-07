import teams from '../../../public/team.json'

const AboutUs = () => {



    return (
        <div className='p-4'>
            <h1 className="text-4xl text-center my-5">Our Dedicated Team</h1>
            <div className='ml-5'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {teams.map(item => (
                        <div key={item.id} className="card bg-base-100 border rounded-none">
                            <figure className="px-4 pt-5 rounded-none">
                                <img src={item.image} alt="Product" className="h-36 w-full" />
                            </figure>
                            <div className="card-body p-5 items-center text-center flex flex-grow">
                                <h2 className="font-bold">{item.name}</h2>
                                <div className='flex items-center gap-4'>
                                    <p>${item.position}</p>
                                    <p>{item.phone}</p>
                                </div>
                                <div>
                                    <p>{item.email}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='mt-10 text-justify'>
                    <h1 className="text-4xl text-center pb-5">Our Last Year Best Sells</h1>
                    <p className='text-xl'>Welcome to SHEWARA - Your Premier Online Destination for Quality Products at Unbeatable Prices!</p>
                    <p className='text-xl'>At SHEWARA, we are more than just an online store; we are your ultimate shopping destination, offering a curated selection of the finest products at the most competitive prices. From trendy fashion essentials to must-have gadgets, we have got you covered.</p>
                    <p className='text-xl'> With our sleek and user-friendly interface, navigating through our extensive collection is a breeze. Discover the latest fashion trends, explore innovative gadgets, and find everything you need to elevate your lifestyle, all in one convenient place.</p>
                    <p className='text-xl'>We pride ourselves on providing our customers with the best of the best. Our dedicated team works tirelessly to ensure that every product we offer meets our high standards of quality and affordability. From fashion-forward apparel to cutting-edge electronics, we are committed to delivering excellence in every purchase.</p>
                    <p className='text-xl'>Experience the SHEWARA difference today and indulge in the ultimate online shopping experience. Your perfect products are just a click away!</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;