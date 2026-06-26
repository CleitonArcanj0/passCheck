import logo from '../assets/logo.svg' 

function NavBar(){
    return(
        <header className="flex bg-white shadow-sm rounded-2xl mx-2 md:mx-8 my-2">
            <div className='px-8 p-2'>
                <img src={logo} alt="logo do passCheck" className='min-w-32 '/>
            </div>
        </header>
    )
}


export default NavBar;