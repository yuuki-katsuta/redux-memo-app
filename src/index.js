import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import MemoStore from './memo/Store'
//storeをインポート
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Provider store={MemoStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
//ProviderでMemoStoreを設定して、コンポーネント内でstoreのデータを使用可能にした

reportWebVitals();
