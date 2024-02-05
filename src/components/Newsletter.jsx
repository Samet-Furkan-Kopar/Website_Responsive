const Newsletter = () => {
    return (
        <div className="bg-black w-full py-16 text-white px-4">
            <div className="max-w-[1240px] max-auto grid lg:grid-cols-3">
                <div className="lg:col-span-2 m-auto my-2">
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
                        Lorem, ipsum dolor.
                    </h1>
                    <p> Lorem, ipsum dolor.</p>
                </div>
                <div className="my-4">
                    <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                        <input
                            type="text"
                            placeholder="Enter your email"
                            className="p-3 flex w-full rounded-md text-black"
                        />
                        <button className="bg-[#00df9a] w-[200px] mx-auto rounded-md font-medium ml-4 my-6 py-3 px-6 text-black">
                            Notify Me
                        </button>
                    </div>
                    <p>
                        <span className="text-[#00df9a] font-bold">Lorem, ipsum.</span> Lorem ipsum dolor sit amet
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
