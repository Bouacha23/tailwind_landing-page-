import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa';

function Footer() {
  return (
    <div className="Footer bg-black text-white">
        <div className="container py-12 px-4 m-auto ">
               
            <ul className="flex justify-center gap-8 items-cente p-4">
                <FaFacebook size={30}/>
                <FaLinkedin size={30}/>
                <FaInstagram size={30}/>
                <FaTwitter size={30}/>
                <FaPinterest size={30}/>
            </ul>
         


        </div>
    </div>
  )
}

export default Footer