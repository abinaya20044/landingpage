import { AiOutlineMenu } from 'react-icons/ai';

const Header = () => {
  return (
    <div className="h-[4rem]  w-full text-white flex items-center py-2 " > 
         <div className="w-full xl:max-w-[1250px] mx-auto px-6" >
            <ul className="hidden w-full lg:flex items-center justify-center space-x-10" >
                <li className="cursor-pointer text-xl font-medium hover:text-gray-300">WELCOME TO OUR HOME PAGE</li>
                <li className="cursor-pointer text-xl font-medium hover:text-gray-300">LEARN MORE</li>
                <li className="cursor-pointer text-xl font-medium hover:text-gray-300">CONTACT US</li>
                <li className="cursor-pointer text-xl font-medium hover:text-gray-300">EXPLORE OUR SERVICES</li>
            </ul>

            <AiOutlineMenu size={28} className='lg:hidden' />
         </div>
    </div>
  )
}

export default Header