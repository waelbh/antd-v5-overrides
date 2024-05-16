import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './demo';
import './index.less';
import { ConfigProvider } from 'antd';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <ConfigProvider
      theme={{
        token: {
          fontFamily: "'Work Sans', sans-serif",
        }
      }}
    >
    <App />
    </ConfigProvider>
  </React.StrictMode>
);
