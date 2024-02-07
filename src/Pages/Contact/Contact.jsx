

const Contact = () => {
    return (
        <div className='p-0 lg:p-4'>
            <div className='ml-5'>
                <h1 className="text-4xl text-center mb-5">Contact With Us</h1>
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold text-black">Send Feedback!</h1>
                            <p className="py-6">At <span className="text-2xl">SHEWARA</span>, we are committed to providing the best possible experience for our users. Your feedback helps us understand what is working well and where we can improve. If you encounter any issues, have suggestions for new features, or simply want to share your thoughts, we had love to hear from you!</p>
                            <p>   Please take a moment to let us know about your experience using our website. Your feedback is invaluable to us and will help us continue to enhance our services to better meet your needs.</p>
                            <p> Thank you for being a part of SHEWARA community!</p>
                        </div>
                        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 rounded-none">
                            <form className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered rounded-none" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Write Your Feedback</span>
                                    </label>
                                    <textarea className="textarea textarea-bordered rounded-none" placeholder="Bio"></textarea>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn rounded-none">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;