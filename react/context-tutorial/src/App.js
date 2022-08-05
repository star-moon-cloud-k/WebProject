import React from 'react';
import ColorBox from './component/ColorBox';
import ColorContext, {ColorProvider} from "./context/color";

const App = () =>{
  return (
      <ColorProvider>
          <div>
              <ColorBox/>
          </div>
      </ColorProvider>

  )
}
export default App;