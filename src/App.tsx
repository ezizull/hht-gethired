import { useState } from 'react'
import { Card } from './presentation/components/shadcn/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Card className='m-4 p-4'>
      <div className="flex justify-center space-x-4 mb-4">
        <a href="https://vitejs.dev" target="_blank">
          <img src="https://cdn.worldvectorlogo.com/logos/vitejs.svg" className="size-10" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" className="size-10" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="">
        Click on the Vite and React logos to learn more
      </p>
    </Card>
  )
}

export default App
