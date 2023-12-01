import Routes from "./routes/Routes";
import { Provider } from "react-redux";
import { store } from "./states/store";
import { StripeProvider } from '@stripe/stripe-react-native';

export default function App() {
  console.reportErrorsAsExceptions = false;
  const publishableKey = 'pk_test_51N1TzKKy8OcUrFfrGTKEGh0HfSc8ZzobBjnfpmOsakeUgPwXTbzEWq0KfRvBsyhwpdll82kjjIdmRyItCFWR2k7H00zS0JO6Zt';

  return (
    <Provider store={store}>
        <Routes />
    </Provider>
  );
}