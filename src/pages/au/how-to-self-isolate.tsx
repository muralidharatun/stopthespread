import React from "react"

import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import BasicPage from "../../templates/BasicPage"
import HowToSelfIsolate from "../../components/howToSelfIsolate/HowToSelfIsolate/au"

const HowToSelfIsolatePage = () => {
  return (
    <Layout>
      <SEO
        title="How to Self-Isolate"
        description="Your how-to guide to self-isolation. It won't be easy, but we'll help you get through it."
      />
      <BasicPage activeCountry="au">
        <HowToSelfIsolate />
      </BasicPage>
    </Layout>
  )
}

export default HowToSelfIsolatePage
