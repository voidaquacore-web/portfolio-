const NavBar = () => {
    const navItems = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'About', path: '/about' },
    { id: 3, name: 'Services', path: '/services' },
    { id: 4, name: 'Contact', path: '/contact' }
  ];


    return ( 
        <nav className="mx-auto mb-4 flex w-full max-w-7xl justify-center px-4 font-mono">
            <div className="mt-4 flex w-full flex-wrap items-center justify-between gap-x-6 gap-y-3 rounded-3xl bg-[#FCB3C5] px-5 py-3 sm:mt-5 sm:px-8 md:flex-nowrap md:gap-10">
                 <h1 className="text-2xl font-extrabold text-[#ec065e]">Ka<span className="text-black">nishk</span></h1>
            <ul className="order-3 flex w-full items-center justify-center gap-x-5 gap-y-2 text-sm sm:gap-x-8 md:order-none md:w-auto md:flex-1 md:text-base">
                {navItems.map((item) => (<li key={item.id} className="font-bold hover:text-pink-500 hover:underline underline-offset-5 decoration-pink-500 decoration-2">
                    <a href={item.path}>{item.name} </a>
                </li>))}
            </ul>
            <a href="/contact" className="rounded-full bg-[#F62F7A] px-5 py-2 text-sm font-extrabold text-white sm:text-base">Hire me</a>
            </div>
        </nav>
     );
}
 
export default NavBar;
