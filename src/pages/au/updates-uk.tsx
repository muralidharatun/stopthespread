import React from "react"
// import { Link } from "gatsby"

import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import BasicPage from "../../templates/BasicPage"
import UpdatesUK from "../../components/updates/Updates/au"

const UpdatesUKPage = () => {
  return (
    <Layout>
      <SEO title="Latest Updates for the UK" />
      <BasicPage activeCountry="au">
        <UpdatesUK />
      </BasicPage>
    </Layout>
  )
}

export default UpdatesUKPage
