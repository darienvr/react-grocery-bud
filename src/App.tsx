
import './App.css'
import Input from './components/Input'


function App(): JSX.Element {

  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-lg-5 mx-auto'>
          <div className="card card-body">
            <Input />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
