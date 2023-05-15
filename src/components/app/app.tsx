import {BrowserRouter, Routes, Route} from 'react-router-dom';
import IndexPage from '../../pages/index-page/index-page';


function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<IndexPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
