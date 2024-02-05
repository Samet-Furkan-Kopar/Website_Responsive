import { ReactTyped } from "react-typed";
const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
      <p className="text-[#00df9a] font-bold p-2">Lorem, ipsum dolor.</p>
      <h1 className="md:text:7xl sm:text-6xl text-4xl font-bold md:py-6">Lorem ipsum dolor sit amet.</h1>
      <div className="flex justify-center items-center">
        <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4"> Web Dev.</p>
        <ReactTyped
        className="md:text-5xl sm:text-4xl text-xl font-bold pl-2"
          strings={['Web Developer', 'Frontend Developer', 'Fullstack Developer']}
          typeSpeed={120}
          backSpeed={140}
          loop />
      </div>
      <p className="md:text-2xl text-xl font-old text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      <button className="bg-[#00df9a] w-[200px] mx-auto rounded-md font-medium my-6 py-3 text-black">Get Started</button>
      </div>
    </div>
  )
}

export default Hero
