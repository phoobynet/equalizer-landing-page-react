import Landing from '@/routes/Landing'
import { Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <Routes>
      <Route
        index
        element={<Landing />}
      />
    </Routes>
  )
}
