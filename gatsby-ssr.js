/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  // Places analytics script in head.
  if (process.env.NODE_ENV === "production") {
    const goSquared = `
      !(function(g, s, q, r, d) {
        r = g[r] =
          g[r] ||
          function() {
            ;(r.q = r.q || []).push(arguments)
          }
        d = s.createElement(q)
        q = s.getElementsByTagName(q)[0]
        d.src = '//d1l6p2sc9645hc.cloudfront.net/tracker.js'
        q.parentNode.insertBefore(d, q)
      })(window, document, 'script', '_gs')
      _gs('GSN-344018-G')
      _gs('set', 'anonymizeIP', true)
    `

    const hotjar = `
      ;(function(h, o, t, j, a, r) {
        h.hj =
          h.hj ||
          function() {
            ;(h.hj.q = h.hj.q || []).push(arguments)
          }
        h._hjSettings = { hjid: 1738020, hjsv: 6 }
        a = o.getElementsByTagName('head')[0]
        r = o.createElement('script')
        r.async = 1
        r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv
        a.appendChild(r)
      })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=')
    `

    const posthog = `
      posthog.init('gFpqTzWtqfE6coGaPYPXS5o1FWgeZ81IwLlzLbKxLEA', {api_host: 'https://stop-the-spread-analytics.herokuapp.com'})
    `

    setHeadComponents([
      <script
        key="gosquared"
        dangerouslySetInnerHTML={{ __html: goSquared }}
      />,
      <script key="hotjar" dangerouslySetInnerHTML={{ __html: hotjar }} />,
      <script
        key="posthogExternal"
        src="https://stop-the-spread-analytics.herokuapp.com/static/array.js"
      />,
      <script key="posthog" dangerouslySetInnerHTML={{ __html: posthog }} />,
      <script
        key="crazyegg"
        type="text/javascript"
        src="//script.crazyegg.com/pages/scripts/0093/4205.js"
        async={true}
      />,
    ])
  }
}
