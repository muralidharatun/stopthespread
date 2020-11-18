import React from "react"

import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import BasicPage from "../../templates/BasicPage"
import StopTheSpread from "../../components/stopTheSpread/StopTheSpread/au"

const StopTheSpreadPage = () => {
  return (
    <Layout>
      <SEO
        title="How you can help"
        description="The top four things you can do to help stop the spread of coronavirus."
      />
      <BasicPage activeCountry="au">
        <StopTheSpread />
      </BasicPage>
    </Layout>
  )
}

export default StopTheSpreadPage
