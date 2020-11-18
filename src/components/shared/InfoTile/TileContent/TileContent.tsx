import React from "react"
import styled from "styled-components"
import styles from "./tileContent.module.scss"
import shortid from "shortid"
import classnames from "classnames"

const List = styled.div`
  li::before {
    color: ${props => props.color};
  }
`

const TileContent = ({
  byline,
  details,
  color,
  warning,
}: {
  byline: string | null
  details: string[] | JSX.Element
  color: string
  warning?: boolean
}) => (
  <div
    className={classnames(
      styles.innerContentContainer,
      warning ? styles.warning : null
    )}
  >
    {byline && <p className={styles.byline}>{byline}</p>}
    <List color={color}>
      {details instanceof Array ? (
        <ul>
          {details.map(detail => (
            <li key={shortid.generate()}>{detail}</li>
          ))}
        </ul>
      ) : (
        <List color={color}>{details}</List>
      )}
    </List>
  </div>
)

export default TileContent
