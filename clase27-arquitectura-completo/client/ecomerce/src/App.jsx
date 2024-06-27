import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ItemsListConteiner } from './ItemsListContainer/ItemsListConteiner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';

function App() {
  

    return (
        <Router>
            <div className=''>
                <h1 className=''>Ecommerce</h1>
                <Routes>
                    <Route path='/' element={<ItemsListConteiner />} />
                    <Route path='/detail/:pid' element={<ItemDetailContainer />} />                  
                </Routes>
            </div>
        </Router>
    )
}

export default App
