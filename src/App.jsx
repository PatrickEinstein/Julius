import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Project from "./sections/Project.jsx";
import Clients from "./sections/Clients.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";
import Experience from "./sections/Experience.jsx";


const App = () => {
    return (
        <main className='w-full overflow-hidden'>
            <Navbar/>
            <Hero/>
            <About/>
            <Project/>
            <Clients/>
            <Experience/>
            <Contact/>
            <Footer/>
        </main>
    )
}
export default App
