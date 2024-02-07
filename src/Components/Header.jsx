export default function Header(){
    return (
        <header className="bg-gray-800 flex flex-row p-4 text-slate-300">
          {/* Logo/Brand Name */}
          <div className="text-lg md:text-3xl font-bold">MJ Fitness</div>
    
          {/* Navigation */}
          <nav className="flex space-x-4 ml-auto">
            <a href="#" className="hover:text-gray-300 text-md md:text-2xl">Home</a>
            <a href="#" className="hover:text-gray-300 text-md md:text-2xl" >Workout Plans</a>
          </nav>
        </header>
      );
}
