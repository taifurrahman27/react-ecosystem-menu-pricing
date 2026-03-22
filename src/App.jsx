
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './Components/DaisyNav/DaisyNav'
import NavBar from './Components/NavBar/NavBar'
import PricingOptions from './Components/Pricing/PricingOptions'


const pricingPromise = fetch('pricingData.json').then(res => res.json());



function App() {

  return (
    <>
      <header>

        <NavBar>
        </NavBar>

        {/* <DaisyNav>
        </DaisyNav> */}
      </header>

      <main>

        <Suspense fallback={<span className="loading loading-dots loading-lg"></span>}>
          <PricingOptions pricingPromise={pricingPromise}>

          </PricingOptions>
        </Suspense>

      </main>

    </>
  )
}

export default App
