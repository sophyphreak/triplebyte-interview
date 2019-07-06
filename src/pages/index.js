import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from '../components/layout';
import SEO from '../components/seo';
import App from '../components/App/App';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <App />
  </Layout>
);

export default IndexPage;
