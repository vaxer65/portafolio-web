import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SpotlightWrapper } from './components/layout/SpotlightWrapper';
import { HomePage } from './pages/HomePage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';

export default function App() {
  return (
    <BrowserRouter>
      <SpotlightWrapper>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/proyecto/:id" element={<ProjectDetailPage />} />
        </Routes>
      </SpotlightWrapper>
    </BrowserRouter>
  );
}