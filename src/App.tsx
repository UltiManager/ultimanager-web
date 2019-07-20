import * as React from 'react'
import {hot} from 'react-hot-loader/root';
import Counter from './Counter'

const App = () => (
    <div>
      <h1>Hello, World.</ h1>
      <Counter/>
    </div>
  )

export default hot(App)
