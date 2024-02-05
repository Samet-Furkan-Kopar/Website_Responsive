import img from "../assets/images/laptop.jpg"
const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='width-[500px] mx-auto my-4' src={img} alt=""/>
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>Lorem, ipsum.</p>
                <h1 className='md:text-4 sm:text-3xl text-2xl font-bold py-2'>Lorem, ipsum dolor.</h1>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio odio exercitationem a id, pariatur doloribus?</p>
                <button className="bg-black text-[#00df9a] w-[200px] mx-auto rounded-md font-medium md:mx-0 my-6 py-3">Get Started</button>
            </div>
        </div>
      
    </div>
  )
}

export default Analytics
