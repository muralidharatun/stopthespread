import React from "react"
import * as styles from "../updates.module.scss"

const Updates = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Latest updates for Australia</h1>
      {/* BEGIN UPDATES */}
      <h6 className={styles.subHeading}>
        <b>Australian Defence Force deployed</b> - Thursday, 26th March
      </h6>
      <p className={styles.information}>
        The Prime Minister has announced that all overseas travellers arriving
        in Australia from the 28th of March will be housed in hotels for their
        14 day self-isolation. They will be transported directly from the
        airport to their designated facility.
      </p>

      <p className={styles.information}>
        Australian Defence Force will be deployed to provide assistance to in
        the logistics, planning, border control operations and manufacturing of
        essential medical products.
      </p>

      <p className={styles.information}>
        The Commonwealth government has enrolled the assistance of private
        hospitals across Australia for the management of COVID related patients.
      </p>
      <h6 className={styles.subHeading}>
        <b>National Restrictions Tighten</b> - Thursday, 26th March
      </h6>
      <p className={styles.information}>
        The Prime Minister has announced a expanded guide to testing. The 30 min
        rule for hairdressers has been relaxed, however, it is still advised to
        keep social distancing.
      </p>
      <p className={styles.information}>
        Source:{" "}
        <a
          href="https://www.pm.gov.au/media/national-cabinet-update"
          target="_blank"
          rel="noopener noreferrer"
        >
          Prime Minister's cabinet update
        </a>
      </p>
      <h6 className={styles.subHeading}>
        <b>National COVID-19 Coordination Commission announced</b> - Wednesday,
        25th March
      </h6>
      <p className={styles.information}>
        The Prime Minister announced the creation of National COVID-19
        Coordination Comission(NCCC) that will coordinate responses and
        resources to address to the growing health crisis. This includes
        ensuring the coordination of essential health and infastructure.
      </p>
      <p className={styles.information}>
        The Prime Minister has announced the temporary suspension of all
        semi-urgent elective surgery from midnight on the 25th of March. Anyone
        requiring urgent attention will receive treatment. This will allow the
        preservation of national supply of personal protective equipment for
        healthcare workers.
      </p>
      <p className={styles.information}>
        Source:{" "}
        <a
          href="https://www.pm.gov.au/media/national-covid-19-coordination-commission"
          target="_blank"
          rel="noopener noreferrer"
        >
          National COVID-19 Coordination Commission
        </a>
      </p>
      <h6 className={styles.subHeading}>
        <b>Stage 1 Social Gathering Restrictions details</b> - Tuesday, 24th
        March
      </h6>
      <p className={styles.information}>
        The Commonwealth government has banned Australians from travelling
        overseas with exceptions in place for overseas residents. See
        Smartraveller website for details.
      </p>
      <p className={styles.information}>
        The Prime Minister has released details on the exceptions to the Stage 1
        restrictions. These are some of the exceptions:
      </p>
      <ul>
        <li>Cafes/Restaurants/Food Courts - takeaway and home delivery</li>
        <li>Real Estate - private inspection appointments</li>
        <li>
          Hairdressers - up to 30 minute appointments and 4 sqmetre rules apply
        </li>
        <li>
          Concerts - live streaming of small group F performers with social
          distancing
        </li>
        <li>
          Community centres - essential voluntary, public services, food banks,
          homeless services can continue to operate
        </li>
        <li>
          Caravan parks - people living permanently in caravan parks or people
          with no alternative residence may continue to stay
        </li>
        <li>Weddings - maximum of 5 people and 4 sqmetre rules apply</li>
        <li>Funerals - maximum of 10 people and 4 sqmetre rule apply</li>
      </ul>
      <p className={styles.information}>
        The Commonwealth government has started measures to prevent price
        gouging and export of essential medial products.
      </p>
      <p className={styles.information}>
        Source:{" "}
        <a
          href="https://www.pm.gov.au/media/update-coronavirus-measures-24-March-2020"
          target="_blank"
          rel="noopener noreferrer"
        >
          Prime Minister's updates on COVID-19 measures
        </a>
      </p>
      <h6 className={styles.subHeading}>
        <b>Stage 1 National Social Gathering Restrictions</b> - Sunday, 22 March
      </h6>
      <p className={styles.information}>
        The Commonwealth government has implemented Stage 1 restrictions on
        social gatherings.
      </p>
      <p className={styles.information}>
        The Prime Minister has ordered the closure of social establishments by
        midday on the 23rd of March. This includes cafes, bars, restaurants
        (take away or home delivery will be allowed), nightclubs, theatres,
        cinemas, gyms, and leisure centres. It has been said that these measures
        will be reviewed monthly and are expected to be in place for 6 months.
        Supermarkets and pharmacies remain open.
      </p>
      <p className={styles.information}>
        At present schools remain open. Victoria's school break will be pre-
        poned to Tuesday, 24th March. The Prime Minister emphasized that if
        children are kept home from school then parents have to ensure children
        are following the social distancing guidelines.
      </p>
      <p className={styles.information}>
        The Prime Minister has advised stricter social distancing and
        non-essential gatherings. This includes limiting all non-essential
        travel and restrictions on visitors to aged care homes.
      </p>
      <p className={styles.information}>
        Source:{" "}
        <a
          href="https://www.pm.gov.au/media/update-coronavirus-measures-0"
          target="_blank"
          rel="noopener noreferrer"
        >
          Prime Minister's updates on COVID-19 measures
        </a>
      </p>
      <h6 className={styles.subHeading}>
        <b>Restriction on Indoor Gatherings</b> - Friday, 20th March
      </h6>
      <p className={styles.information}>
        The Prime Minister has announced a ban on all non-essential indoor
        gatherings of more than a 100 people and outdoor gatherings of more than
        500 people. For all gatherings, the following social distancing measures
        must be followed:
      </p>
      <ul>
        <li>one person is to occupy a minimum of 4 square metre space</li>
        <li>there must be facilities for adequate hand hygiene</li>
      </ul>
      <p className={styles.information}>
        The Prime Minister advises everyone to avoid all domestic travel unless
        necassary.The Commonwealth government has reieterated the need to cease
        the hoarding of food and medical supplies as there is no risk to our
        national supply. The vulnerable and elderly populations are not able to
        obtain supplies as a result.
      </p>
      <p className={styles.information}>
        There are now restrictions for visitors to aged care facilities.
      </p>
      <p className={styles.information}>
        If you are unwell, you should self isolate and contact your GP.
      </p>
      <p className={styles.information}>
        Source:{" "}
        <a
          href="https://www.pm.gov.au/media/update-coronavirus-measures-0"
          target="_blank"
          rel="noopener noreferrer"
        >
          Prime Minister's updates on COVID-19 measures
        </a>
      </p>
    </div>
  )
}

export default Updates
