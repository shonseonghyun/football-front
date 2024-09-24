import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import GlobalStyles from './styles/GlobalStyles';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from "react-query/devtools";
import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
    <RecoilRoot>
      <BrowserRouter>
        <GlobalStyles />
          <App />
      </BrowserRouter>
    </RecoilRoot>
    <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
  </QueryClientProvider>
);

