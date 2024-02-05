export default function Header(){
    return (
        <header className="bg-gray-800 flex flex-row p-4 text-white">
          {/* Logo/Brand Name */}
          <div className="text-2xl font-bold">MJ Fitness</div>
    
          {/* Navigation */}
          <nav className="flex space-x-4 ml-auto">
            <a href="#" className="hover:text-gray-300">Home</a>
            <a href="#" className="hover:text-gray-300">Workout Plans</a>
          </nav>
        </header>
      );
}
