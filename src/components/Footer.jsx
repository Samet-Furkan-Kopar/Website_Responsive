import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagramSquare,
    FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
    return (
        <div className="w-full bg-black ">
            <div className="max-w-[1240px]  mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
                <div>
                    <h1 className="w-full text-3xl font-bold text-[#00df9a]">ReactJS</h1>
                    <p className="py-4">Lorem ipsum dolor sit amet.</p>
                    <div className="flex justify-between md:w-[75%] ">
                        <FaDribbbleSquare size={30} />
                        <FaFacebookSquare size={30} />
                        <FaGithubSquare size={30} />
                        <FaInstagramSquare size={30} />
                        <FaTwitterSquare size={30} />
                    </div>
                </div>
                <div className="lg:col-span-3 flex justify-between">
                    <div>
                        <h6 className="font-medium text-gray-400">Support</h6>
                        <ul>
                            <li className="py-2 text-sm">Analytics</li>
                            <li className="py-2 text-sm">Marketing</li>
                            <li className="py-2 text-sm">Commerce</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="font-medium text-gray-400">Company</h6>
                        <ul>
                            <li className="py-2 text-sm">Analytics</li>
                            <li className="py-2 text-sm">Marketing</li>
                            <li className="py-2 text-sm">Commerce</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="font-medium text-gray-400">Solutions</h6>
                        <ul>
                            <li className="py-2 text-sm">Analytics</li>
                            <li className="py-2 text-sm">Marketing</li>
                            <li className="py-2 text-sm">Commerce</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
