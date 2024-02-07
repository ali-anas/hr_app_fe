import { createWrapper } from 'next-redux-wrapper';
import { store } from '../store';
import { Provider } from 'react-redux';

import '../styles/globals.css'
function MyApp({ Component, pageProps }) {
  return (
    <> 
      <Provider store={store}>
        <div className="my-16">
        <Component {...pageProps} />
        </div>
      </Provider>
    </>
  )
}

const makeStore = () => store;

const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
