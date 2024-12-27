import { Global, ThemeProvider } from '@emotion/react';
import theme from './theme';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { GlobalStyle } from './GlobalStyle';
import Layout from './components/Layout/Layout';
import LottoShop from './components/LottoShop/LottoShop';
import { LottoProvider } from './hooks/useLotto';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyle} />
      <Layout>
        <Header left={<div>행운의 로또</div>} />
        <LottoProvider>
          <LottoShop />
        </LottoProvider>
        <Footer>Copyright 2023. woowacourse</Footer>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
