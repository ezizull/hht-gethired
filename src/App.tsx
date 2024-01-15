import { Provider } from 'react-redux';
import { initFunc } from './App.function';
import { ThemeProvider } from './presentation/components/shadcn/theme';
import { AuthNavigation, HomeNavigation } from './presentation/routes/index.routes';
import { Store } from './infrastructure/reducers';

function App() {
  const { user, loading } = initFunc();

  if (loading) {
    return (
      <ThemeProvider defaultTheme='system' storageKey="vite-ui-theme">
        <div className='flex flex-col items-center justify-center'>
          <p className='font-xl text-center font-bold'>
            Loading App
          </p>
        </div>
      </ThemeProvider>
    );
  } else {
    return (
      <Provider store={Store}>
        <ThemeProvider defaultTheme='system' storageKey="vite-ui-theme">
          {user ? <HomeNavigation /> : <AuthNavigation />}
        </ThemeProvider>
      </Provider>
    );
  }

}

export default App
