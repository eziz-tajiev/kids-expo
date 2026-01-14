import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header/Header'
import { Footer } from '../components/Fotter/Fotter'

export const MainLayout = () => {
  return (
    <div>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
