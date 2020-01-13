import React from 'react'
import Layout from '../components/Layout'
import ContentHeader from '../components/ContentHeader'

const NotFoundPage = () => (
  <Layout>
    <ContentHeader title="Uh Oh!" description="You just hit a route that doesn&#39;t exist... the sadness &#128546;" isFullHeight />
  </Layout>
)

export default NotFoundPage
