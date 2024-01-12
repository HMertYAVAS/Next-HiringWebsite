import Links from "./Links";
import Logo from "./Logo";


function Navbar() {
    return (
        <nav class="bg-white sticky dark:bg-gray-900 w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
           <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

            <Logo />
            <Links />
            </div>
        </nav>
    );
}

export default Navbar;