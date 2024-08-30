import { Route, Routes } from 'react-router-dom'
import { routes } from './constants/routes'
import { Header } from './components/header'
import { Footer } from './components/footer'

function App() {
  return (
    <>
      <Header />
      <Routes>
        {Object.values(routes).map(({path, Component}, idx)=>(
          <Route key={idx} path={path} element={<Component />} />
        ))}
      </Routes>
      <Footer />
    </>
  )
}

export default App
