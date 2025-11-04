import Layout from "./component/Layout"
import Brands from "./component/sections/Brands"
import Hero from "./component/sections/Hero"
import Services from "./component/sections/Services"

function App() {


  return (
    <Layout title="SignsAI">
      <Hero />
      <Brands />
      <Services />
    </Layout>
  )
}

export default App
