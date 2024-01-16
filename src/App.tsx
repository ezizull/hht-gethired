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
        <div className='flex flex-col items-center justify-center h-screen'>
          <svg className='animate-spin size-20 fill-foreground' viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
            <path d="M512 1024A509 509 0 0 1 0 512a36 36 0 1 1 72 0 437 437 0 0 0 269 405 437 437 0 0 0 482-94 438 438 0 0 0 94-482 440 440 0 0 0-94-140 438 438 0 0 0-140-95c-54-22-112-34-171-34a36 36 0 1 1 0-72 509 509 0 0 1 512 512 509 509 0 0 1-512 512z" />
          </svg>
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
