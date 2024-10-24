
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faGear,faHandsAslInterpreting,faMessage, faPeopleGroup, faPhone, faUser, } from '@fortawesome/free-solid-svg-icons'
function Side(){
    
    return(
        <>
        <body className='bg-black h-screen w-screen flex'>
        <nav>
            <ul>
                <div>
                    <li><a href="#"><FontAwesomeIcon className='text-xl text-pink-500 p-3' icon={faHandsAslInterpreting} /></a></li>
                    <li><a href="#"><FontAwesomeIcon className='text-xl text-white p-3' icon={faBars} /></a></li>
                    <li><a href="#"><FontAwesomeIcon className='text-xl text-white p-3' icon={faMessage} /></a></li>
                    <li><a href="#"><FontAwesomeIcon className='text-xl text-white p-3' icon={faPhone} /></a></li>
                    <li><a href="#"><FontAwesomeIcon className='text-xl text-white p-3' icon={faPeopleGroup} /></a></li>
                </div>
                <div className='absolute bottom-0 '>
                <li><a href="#"><FontAwesomeIcon className='text-xl text-white p-3' icon={faGear} /></a></li>
                <li><a href="#"><FontAwesomeIcon className='text-xl text-white p-3' icon={faUser} /></a></li>
                </div>
            </ul>
        </nav>
        <header>
            <nav><p className="text-white absolute top-2 left-12 font-bold text-lg font-serif">Muchatlu</p></nav>
        </header>
        </body>
        </>
    )
}
export default Side