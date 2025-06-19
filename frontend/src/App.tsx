
import { Route, Routes } from 'react-router'
import './App.css'
import { lazy } from 'react'

const UsersTable = lazy(() => import('./components/users-table/UsersTable').then(module => ({ default: module.UsersTable })));
const DetailsPage = lazy(() => import('./components/details/Details').then(module => ({ default: module.DetailsPage })));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<UsersTable />} />
        <Route path="/users/:id" element={<DetailsPage />} />
      </Routes >
    </>
  )
}

export default App
