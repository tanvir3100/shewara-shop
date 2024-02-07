import collection from '../../../public/collection.json';

const DashBoard = () => {
    return (
        <div className="p-5">
            <h1 className="text-3xl text-center my-5">Your Cart</h1>
            <div className="bg-white">
                <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <th>Name</th>
                                    <th>Job</th>
                                    <th>Favorite Color</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    collection.map(item => <tbody className='w-full' key={item.id}>
                                        {/* row 1 */}
                                        <tr>
                                            <th>
                                                <label>
                                                    <input type="checkbox" className="checkbox" />
                                                </label>
                                            </th>
                                            <td>
                                                <div className="flex items-center space-x-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-20 h-20">
                                                            <img src={item.image} />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">{item.title}</div>
                                                        <div className="text-sm opacity-50">{item.userEmail}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {item.authorName}
                                                <br />
                                                <span className="badge badge-ghost">{item.name}</span>
                                            </td>
                                            <td>{item.new_price}</td>
                                            <th>
                                                <button className="btn">delete</button>
                                            </th>
                                        </tr>
                                    </tbody>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;