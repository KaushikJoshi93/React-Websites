import { useEffect } from "react"
import { useState } from "react"
import PageLoader from "./components/PageLoader"
import {motion} from 'framer-motion'


function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, [])
  return (
    <>
      {!loading ? 
      <motion.div 
      className=" bg-blue-100 text-red-600 text-1xl md:text-4xl lg:text-4xl flex justify-center items-center w-screen h-screen font-bold"
      whileInView={{opacity:[0,1] , scale:[1,2]}}
      >
            Welcome ! User

      </motion.div> :
          <PageLoader />
      }
    </>
  )
}

export default App
