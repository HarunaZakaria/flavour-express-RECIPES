
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Welcome from "./components/Welcome"
import AvailableFood from "./components/AvailableFood"


export default function HomePage() {

    return (
        <div>
              <Navbar />
              <Welcome />
              <AvailableFood />
              <Footer />

           
        </div>
    )
}

