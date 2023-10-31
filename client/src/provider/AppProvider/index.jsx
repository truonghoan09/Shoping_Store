import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '@/redux/store';

export default function AppProvider({ children }) {
  return (
    <Provider store={store}>
      <Suspense fallback={<h1>Loading...</h1>}>
        <BrowserRouter>{children}</BrowserRouter>
      </Suspense>
    </Provider>
  );
}
