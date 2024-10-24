import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function Home() {

    return (
        <>
        <header className="bg-zinc-700 w-96 h-screen absolute top-10 left-12 pl-6">
            <div>
                <p className="text-white font-serif text-3xl">chat</p>
            </div>
            <div>
                <input className="w-80 mt-4 rounded-md h-7 bg-zinc-800" type="text" placeholder="    Search or start new chat" /><FontAwesomeIcon className='absolute text-white top-14 right-12' icon={faMagnifyingGlass} />
            </div>
        </header>
       
        </>
    )
}

export default Home