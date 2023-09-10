import { Route, Routes } from "react-router-dom"
import Layout from "../layout"
import Home from "../pages/Home"


const AppRoutes = ()=> {
     
    return (
      <Layout>
        <Routes>
          <Route path="*" element={<Home />}></Route>
        </Routes>
      </Layout>

    )

}

export default AppRoutes