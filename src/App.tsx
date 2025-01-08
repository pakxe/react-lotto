import { Global, ThemeProvider } from '@emotion/react';
import theme from './theme';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { GlobalStyle } from './GlobalStyle';
import Layout from './components/Layout/Layout';
import LottoShop from './components/LottoShop/LottoShop';
import { ModalProvider } from './hooks/useModal';
import { LottoProvider } from './contexts/LottoContext';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <LottoProvider>
        <ModalProvider>
          <Global styles={GlobalStyle} />
          <Layout>
            <Header left={<div>행운의 로또</div>} />
            <LottoShop />
            <Footer>Copyright 2023. woowacourse</Footer>
          </Layout>
        </ModalProvider>
      </LottoProvider>
    </ThemeProvider>
  );
};

export default App;
