import React, { useState } from "react"
import * as styles from "./form.module.scss"
import classnames from "classnames"
import { Link } from "gatsby"
import useNetlifyForm from "../../../utils/hooks/useNetlifyForm"

import backIcon from "./back.svg"

const Form = () => {
  const [active, setActive] = useState(false)
  const [contactType, setContactType] = useState<"sms" | "whats-app">("sms")
  const [contactNumber, setContactNumber] = useState<string>("")
  const [country, setCountry] = useState<string>("UK")
  const [firstFocusCapture, setFirstFocusCapture] = useState<boolean>(true)
  const [submitted, setSubmitted] = useState<boolean>(false)
  const formStatus = useNetlifyForm(
    {
      "form-name": "contact-number",
      "contact-number": contactNumber,
      "whats-app": contactType === "whats-app",
      sms: contactType === "sms",
      country: country,
    },
    submitted
  )

  const handleContactTypeChange = (contactType: string) => {
    if (contactType === "sms") {
      return setContactType("sms")
    }
    return setContactType("whats-app")
  }

  const handleFocusCapture = () => {
    if (firstFocusCapture) {
      setContactNumber("+44")
      setFirstFocusCapture(false)
    }
  }

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  const renderSubmitButton = () => {
    switch (formStatus) {
      case "Unsubmitted":
        return (
          <button className={classnames(styles.submit, styles.unsubmitted)}>
            SUBMIT
          </button>
        )
      case "Submitting":
        return (
          <button
            disabled={true}
            className={classnames(styles.submit, styles.submitting)}
          >
            submitting...
          </button>
        )
      case "Success":
        return (
          <button
            disabled={true}
            className={classnames(styles.submit, styles.success)}
          >
            Success!
          </button>
        )
      case "Failure":
        return (
          <button
            disabled={true}
            className={classnames(styles.submit, styles.failure)}
          >
            Failure
          </button>
        )
    }
  }

  return (
    <>
      <div className={styles.activateContainer}>
        <button
          onClick={() => setActive(true)}
          className={styles.activateFormButton}
        >
          Get direct notifications
        </button>
      </div>
      <div
        className={classnames(styles.wrapper, active ? styles.active : null)}
      >
        <div className={styles.container}>
          <div className={styles.innerContainer}>
            <button onClick={() => setActive(false)} className={styles.back}>
              <img className={styles.backIcon} src={backIcon} alt="" />
              Back
            </button>
            <h4 className={styles.heading}>Get notified directly</h4>
            <p className={styles.byline}>
              We'll message you with any major national updates about
              coronavirus. You can opt out at any time.
            </p>
            <form
              onSubmit={event => handleFormSubmit(event)}
              name="contact-number"
              method="post"
              data-netlify="true"
            >
              <div className={styles.phoneNumberContainer}>
                <input
                  required={true}
                  id="contact-number"
                  name="contact-number"
                  type="tel"
                  className={styles.contactNumber}
                  value={contactNumber}
                  placeholder={"+44"}
                  onChange={event => setContactNumber(event.target.value)}
                  onFocus={() => handleFocusCapture()}
                />
              </div>
              <p className={styles.shareDisclaimer}>
                We will not share your number with anyone else.
              </p>
              <label className={styles.countryLabel} htmlFor="country">
                Which country would you like information for?
                <select
                  className={styles.countrySelect}
                  value={country}
                  name="country"
                  id="country"
                  onChange={event => setCountry(event.target.value)}
                >
                  <option value="UK">UK</option>
                  <option value="USA">USA</option>
                  <option value="USA">AUS</option>
                </select>
              </label>
              <p className={styles.messageTypeChoiceLabel}>
                Choose your message type
              </p>
              <div className={styles.messageTypeContainer}>
                <label
                  className={classnames(
                    styles.messageTypeLabel,
                    contactType === "sms" ? styles.checked : null
                  )}
                  htmlFor="SMS"
                  onClick={() => handleContactTypeChange("sms")}
                >
                  SMS
                  <input
                    id="sms"
                    name="sms"
                    type="checkbox"
                    checked={contactType === "sms"}
                    value="sms"
                    className={styles.messageTypeInput}
                  />
                </label>
                {/* <label
                  className={classnames(
                    styles.messageTypeLabel,
                    contactType === "whats-app" ? styles.checked : null
                  )}
                  htmlFor="WhatsApp"
                  onClick={() => handleContactTypeChange("whats-app")}
                >
                  WhatsApp
                  <input
                    id="whats-app"
                    name="whats-app"
                    type="checkbox"
                    checked={contactType === "whats-app"}
                    value="whats-app"
                    className={styles.messageTypeInput}
                  />
                </label> */}
              </div>
              <div className={styles.privacyContainer}>
                <label className={styles.privacyLabel}>
                  <input
                    required
                    type="checkbox"
                    className={styles.privacyAccepted}
                  />
                  I agree to your <Link to="/privacy">privacy policy</Link>
                </label>
              </div>
              <div className={styles.submitContainer}>
                {renderSubmitButton()}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Form
