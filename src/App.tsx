import { Theme } from '@radix-ui/themes';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Header from './components/common/Header';
import Grading from './pages/Grading';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Dashboard />,
    },
    {
      path: '/grading',
      element: <Grading />,
    },
  ]);

  return (
    <Theme>
      <div className="px-3 md:px-10 bg-gray-bg min-h-screen">
        <div className="py-6 max-w-6xl mx-auto flex flex-col gap-6">
          <Header />
          <RouterProvider router={router} />
        </div>
      </div>
    </Theme>
  );
}

export default App;
