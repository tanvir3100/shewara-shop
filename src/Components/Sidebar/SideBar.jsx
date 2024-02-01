

const SideBar = () => {
    return (
        <div className="text-center text-xl gap-5 border border-l-0 w-[188px] h-[100vh]">
            <div className="h-[84px] w-full flex justify-center items-center border border-l-0 border-r-0 ">
                <a className="btn btn-ghost text-xl">SHEWARA</a>
            </div>
            <div className="mt-10 text-justify">
                <h1 className="text-2xl mb-3 font-bold">Category</h1>
                <ul>
                    <li>
                        <label>
                            <input type="checkbox" className="checkbox checkbox-xs" />
                            <span className="ml-2">All Products</span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" className="checkbox checkbox-xs" />
                            <span className="ml-2">Nick</span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" className="checkbox checkbox-xs" />
                            <span className="ml-2">Adidas</span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" className="checkbox checkbox-xs" />
                            <span className="ml-2">Jordan</span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" className="checkbox checkbox-xs" />
                            <span className="ml-2">New Era</span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" className="checkbox checkbox-xs" />
                            <span className="ml-2">Patagonia</span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" className="checkbox checkbox-xs" />
                            <span className="ml-2">Obey</span>
                        </label>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SideBar;