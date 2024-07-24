import { Route, Routes } from 'react-router-dom'
import { routes } from './constants/routes'
import { Header } from './components/header'

function App() {
  console.log(Object.values(routes))
  return (
    <>
      <Header />
      <Routes>
        {Object.values(routes).map(({path, Component}, idx)=>(
          <Route key={idx} path={path} element={<Component />} />
        ))}
      </Routes>
    </>
  )
}

export default App
