import React from "react"
// import { Link } from "gatsby"

import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import BasicPage from "../../templates/BasicPage"
import Updates from "../../components/updates/Updates/aus"

const UpdatesAUSPage = () => {
  return (
    <Layout>
      <SEO title="Latest Updates for Australia" />
      <BasicPage activeCountry="au">
        <Updates />
      </BasicPage>
    </Layout>
  )
}

export default UpdatesAUSPage
