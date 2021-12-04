import {useState} from 'react'
import Home from './components/Home'
import Modal from './components/Modal'
import Sidebar from './components/Sidebar'

function App() {

  // State
  const [showSidebar, setShowSidebar] = useState(false)
  const [showModal, setShowModal] = useState(false)

  // Set State
  const toggleShowSidebar = () => {
    setShowSidebar(!showSidebar)
  }
  const toggleShowModal = () => {
    setShowModal(!showModal)
  }

  return (
    <div className="App">
      <Home toggleShowSidebar={toggleShowSidebar} toggleShowModal={toggleShowModal} />
      <Modal showModal={showModal} toggleShowModal={toggleShowModal} />
      <Sidebar showSidebar={showSidebar} toggleShowSidebar={toggleShowSidebar} />
    </div>
  );
}

export default App;
