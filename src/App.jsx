import { useState } from 'react'
import Body from './components/Body'
import { Provider } from 'react-redux'
import appStore from './utils/appStore'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <Provider store={appStore}>
          <Body/>
     </Provider>
        
    </div>
  )
}

export default App
