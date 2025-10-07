import './App.css'
import { Navbar } from '/src/components/Navbar';
import { TextBox } from '/src/components/TextBox';
import { ImageBox } from '/src/components/ImageBox';

function App() {


  return (
    <>
      <Navbar />

      <div className="border-amber-700 h-20 flex items-center justify-center">
        <h1 className="text-4xl font-bold">Nome do bicho</h1>
      </div>

      <div className="w-full h-screen flex flex-row">
        <div className="basis-2/5 h-full">
          <ImageBox />
        </div>
        <div className="basis-3/5 h-full">
          <TextBox />
        </div>
      </div>



    </>
  )
}

export default App
