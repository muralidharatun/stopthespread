import React from "react"

import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import BasicPage from "../../templates/BasicPage"
import Myths from "../../components/myths/Myths/de"

const MythsPage = () => {
  return (
    <Layout>
      <SEO
        title="Myths and Misconceptions"
        description="We dispel the biggest coronavirus myths and misconceptions here."
      />
      <BasicPage activeCountry="de">
        <Myths />
      </BasicPage>
    </Layout>
  )
}

export default MythsPage
