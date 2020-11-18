import React from "react"

import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import HomepageTiles from "../../components/index/HomepageTiles/au"
import BasicPage from "../../templates/BasicPage"
import MoreInformation from "../../components/index/MoreInformation/au"
import Form from "../../components/index/Form"
import SpecialAdvice from "../../components/index/SpecialAdvice/au/SpecialAdvice"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <BasicPage activeCountry="au" countriesActive={true} shareMenuEnabled={true}>
        <HomepageTiles />
        <SpecialAdvice />
        <Form />
        <MoreInformation />
      </BasicPage>
    </Layout>
  )
}

export default IndexPage
