import React from "react"
import shortid from "shortid"
import { Link } from "gatsby"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import BasicPage from "../../templates/BasicPage"
import FAQ from "../../components/shared/FAQ"

import styles from "../../components/shared/FAQ/faq.module.scss"
import createParagraphLink from "../../utils/createParagraphLink"
import { countryDetails } from "../../utils/countryConstants"

const faqContent = [
  {
    question: "Whats the difference between coronavirus and COVID-19?",
    answerParagraphs: [
      <p key={shortid.generate()} className={styles.questionAnswer}>
        Coronavirus refers to a large family of viruses. COVID-19 is the disease
        caused by the specific coronavirus currently spreading across the world.
        For simplicity, we use the terms interchangeably on this website.
      </p>,
    ],
    source: {
      linkTo: "https://www.who.int/news-room/q-a-detail/q-a-coronaviruses",
      linkDisplay: "WHO Coronavirus Q&A",
    },
  },
  {
    question: "How is coronavirus spread?",
    answerParagraphs: [
      <p key={shortid.generate()} className={styles.questionAnswer}>
        The disease most likely spreads through small droplets that are released
        when someone with coronavirus coughs or exhales. These droplets can then
        land directly on someone else. Droplets can also be on surfaces; when
        someone touches a surface with droplets and then touches their face,
        they can also get coronavirus. You should clean surfaces with a
        disinfectant and wash your hands with soap regularly. More research is
        being done on the spread of the disease.
      </p>,
    ],
    source: {
      linkTo: "https://www.who.int/news-room/q-a-detail/q-a-coronaviruses",
      linkDisplay: "WHO Coronavirus Q&A",
    },
  },
  {
    question: "When will symptoms appear after catching coronavirus?",
    answerParagraphs: [
      <p key={shortid.generate()} className={styles.questionAnswer}>
        It is estimated that a person would usually develop the symptoms within
        1 to 14 days after catching coronavirus. This is known as incubation
        period, these estimates are being researched continously and will be
        updated as more information is available.
      </p>,
    ],
    source: {
      linkTo:
        "https://www.healthdirect.gov.au/coronavirus-covid-19-symptoms-and-how-the-virus-spreads-faqs#when-symptoms",
      linkDisplay: "Healthdirect Australia Coronavirus Q&A",
    },
  },
  {
    question: "Is this as big of a deal as some people say?",
    answerParagraphs: [
      <p key={shortid.generate()} className={styles.questionAnswer}>
        Coronavirus is a major public health concern for the world. With more
        people needing medical attention and hospitalisation, there is a major
        strain on healthcare infrastructure. Resources are limited and the
        broader the spread of the virus, the bigger the consequence on
        everyone's individual healthcare. While most people have mild symptoms,
        approximately 15% of people have severe infections and 5% require
        intensive care in a hospital ICU. The proportions of severe and critical
        COVID-19 infections are higher than for influenza infections.
      </p>,
    ],
    source: {
      linkTo:
        "https://www.health.nsw.gov.au/Infectious/alerts/Pages/coronavirus-faqs.aspx#sec8",
      linkDisplay: "NSW Government Coronavirus Guidance",
    },
  },
  {
    question: "Will I know if I have caught the virus?",
    answerParagraphs: [
      <p key={shortid.generate()} className={styles.questionAnswer}>
        "The common symptoms of the virus are fever, coughing, sneezing, sore
        throat, fatigue or difficulty breathing . However, some cases of
        coronavirus may have slightly different symptoms and other infections
        like the cold or flu can lead to similar symptoms. While you may not
        know for certain if you have coronavirus, if you have symptoms you
        should find out what to do here."
      </p>,
    ],
    source: {
      linkTo:
        "https://www.healthdirect.gov.au/symptom-checker/tool?symptom=CORO",
      linkDisplay: "Health Direct Australia Coronavirus Symptom Checker",
    },
  },
  {
    question: "Can people without symptoms spread the virus?",
    answerParagraphs: [
      <p key={shortid.generate()} className={styles.questionAnswer}>
        "Although it is possible for an infected person to spread the virus
        before the symptoms appear, the risk is very low. The main way for the
        virus to spread is through droplets when an infected person coughs or
        sneezes. Therefore, it is important to stay at least 1.5m away from a
        person who is sick.
      </p>,
      <p key={shortid.generate()} className={styles.questionAnswer}>
        Many infected people experience only mild symptoms, especially in the
        early stages of the disease. Therefore, it is possible to catch the
        virus from someone who has a mild cough, but does not feel ill.
      </p>,
    ],
    source: {
      linkTo: "https://www.who.int/news-room/q-a-detail/q-a-coronaviruses",
      linkDisplay: "WHO Coronavirus Q&A",
    },
  },
  {
    question: "How long does the virus survive on surfaces?",
    answerParagraphs: [
      <p key={shortid.generate()} className={styles.questionAnswer}>
        The virus can survive up to several days on surfaces. The WHO recommends
        cleaning surfaces with a simple disinfectant. You should wash your hands
        with soap or, if soap is not available, use an alcohol-based hand rub.
        Avoid touching your face.
      </p>,
    ],
    source: {
      linkTo: "https://www.who.int/news-room/q-a-detail/q-a-coronaviruses",
      linkDisplay: "WHO Coronavirus Q&A",
    },
  },
  {
    question: "Should I take antibiotics?",
    answerParagraphs: [
      <p key={shortid.generate()} className={styles.questionAnswer}>
        No. Antibiotics do not work against coronavirus (or any other virus) and
        cannot be used to prevent or treat the disease.
      </p>,
    ],
    source: {
      linkTo: "https://www.who.int/news-room/q-a-detail/q-a-coronaviruses",
      linkDisplay: "WHO Coronavirus Q&A",
    },
  },
  {
    question: "Should I take ibuprofen or other NSAIDs?",
    answerParagraphs: [
      <p key={shortid.generate()} className={styles.questionAnswer}>
        Generally, paracetamol is preferred for temperatures/coughs/sore throat.
        The WHO currently does not recommend against the use of ibuprofen or
        other NSAIDs (e.g. naproxen). There is currently no strong clinical
        evidence between ibuprofen/NSAIDs and worsening of coronavirus. UK
        guidance suggests taking either paracetamol or ibuprofen. Paracetamol is
        generally preferable as a first choice. If your GP or doctor has told
        you not to take paracetamol, please call them to find out what you
        should do.
      </p>,
    ],
    source: {
      linkTo:
        "https://www.tga.gov.au/alert/no-evidence-support-claims-ibuprofen-worsens-covid-19-symptoms",
      linkDisplay:
        "Austraalian Government Department of Health Coronavirus Guidance",
    },
  },
  {
    question: "Should I wear a face mask?",
    answerParagraphs: [
      <p key={shortid.generate()} className={styles.questionAnswer}>
        " There is a global shortage of masks and we need to use them carefully.
        Masks need to be dosposed after a single use. In addition, face masks
        used incorrectly can actually increase your chances of becoming
        infected. If you are WELL, you should not wear a face mask. Only wear a
        face mask to care for someone who is ill. If you are UNWELL with
        COVID-19 symptoms, wear a mask if you have to go out to seek medical
        care."
      </p>,
    ],
    source: {
      linkTo: "https://www.who.int/news-room/q-a-detail/q-a-coronaviruses",
      linkDisplay: "WHO Coronavirus Q&A",
    },
  },
  {
    question: "Do I need to be tested?",
    answerParagraphs: [
      <p key={shortid.generate()} className={styles.questionAnswer}>
        If you do not have symptoms, you do not need to get tested. If you start
        getting symptoms fever, coughing, sneezing, sore throat, fatigue or
        difficulty breathing, use this symptom checker for further guidance.
      </p>,
    ],
    source: {
      linkTo:
        "https://www.healthdirect.gov.au/symptom-checker/tool?symptom=CORO",
      linkDisplay: "Health Direct Australia Coronavirus Guidance",
    },
  },
  {
    question: "What is the best way to strengthen my immune system?",
    answerParagraphs: [
      <p key={shortid.generate()} className={styles.questionAnswer}>
        Normal healthy living is the most reliable way to maintain a strong
        immune system. Get as much sleep as you can, maintain a balanced diet,
        exercise moderately, clean your phone regularly and don’t overwork. If
        you smoke, try to give up and reduce your intake of alcohol and other
        drugs.
      </p>,
    ],
    source: {
      linkTo:
        "https://www.healthdirect.gov.au/blog/can-you-boost-your-immune-system-against-the-coronavirus-covid-19",
      linkDisplay: "Health Direct Australia Coronavirus Guidance",
    },
  },
  {
    question: "I am above 60 years old",
    answerParagraphs: [
      <p key={shortid.generate()} className={styles.questionAnswer}>
        If you are older than 60(or 50 for Aboriginal and Torres Strait
        Islanders),you are at an increased risk of developing severe illness. If
        you have symptoms, you should find out what to do next{" "}
        <a
          href="https://www.healthdirect.gov.au/coronavirus"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        . If you do not have symptoms, you should lower your risk of disease by
        significantly minimising contact in public settings and following the
        steps outlined <Link to="/au/how-you-can-help">here</Link>.
      </p>,
    ],
    source: {
      linkTo:
        "https://www.health.gov.au/news/health-alerts/novel-coronavirus-2019-ncov-health-alert/advice-for-people-at-risk-of-coronavirus-covid-19/coronavirus-covid-19-advice-for-older-people",
      linkDisplay:
        "Australian Government Department of Health Coronavirus Guidance",
    },
  },
  {
    question: "I'm young and healthy - should I worry?",
    answerParagraphs: [
      <p key={shortid.generate()} className={styles.questionAnswer}>
        Everyone should be careful. Although coronavirus is more likely to make
        older people very sick, in USA 2-4% of people in intensive care are aged
        20-55. Young people can also infect someone who is more vulnerable.
      </p>,
    ],
    source: {
      linkTo:
        "https://www.cdc.gov/mmwr/volumes/69/wr/mm6912e2.htm?s_cid=mm6912e2_w",
      linkDisplay: "As reported by The CDC",
    },
  },

  {
    question: "Can someone catch coronavirus twice?",
    answerParagraphs: [
      <p key={shortid.generate()} className={styles.questionAnswer}>
        Not much is yet known about coronavirus. If you have recovered from
        falling ill, you should still follow guidance on stopping the spread:
        wash your hands regularly, don't touch your face, and avoid the unwell.
      </p>,
    ],
    source: {
      linkTo:
        "https://www.healthdirect.gov.au/coronavirus-covid-19-information-for-carers-faqs",
      linkDisplay: "Health Direcct Australia Coronavirus Guidance",
    },
  },
  {
    question: "I have a hospital/GP appointment - should I still go?",
    answerParagraphs: [
      <p key={shortid.generate()} className={styles.questionAnswer}>
        It is recommended that everyone seek medical assistance remotely if
        possible. Your GP or doctor should contact you about what you should do.
        If you have not heard from your GP or doctor but you have an appointment
        soon, you should call them and ask if you should come in person or can
        discuss over a phone or another platform.
      </p>,
    ],
    source: {
      linkTo: "https://www.healthdirect.gov.au/coronavirus",
      linkDisplay: "Health Direct Australia Coronavirus Guidance",
    },
  },
  {
    question: "Can I breastfeed?",
    answerParagraphs: [
      <p key={shortid.generate()} className={styles.questionAnswer}>
        Coronavirus is not known to spread via breastmilk. You should speak to
        your GP or midwife by phone to discuss this with them. If you do
        breastfeed, please use extra precautions. You can find them{" "}
        {createParagraphLink(
          "https://ranzcog.edu.au/statements-guidelines/covid-19-statement",
          "here"
        )}
        .
      </p>,
    ],
    source: {
      linkTo: "https://ranzcog.edu.au/statements-guidelines/covid-19-statement",
      linkDisplay:
        "The Royal Australian and New Zealand College of Obstetricians and Gynaecologists",
    },
  },
  {
    question: "When is it safe to stop self-isolation?",
    answerParagraphs: [
      <p key={shortid.generate()} className={styles.questionAnswer}>
        If you have been asked to self isolate after arriving from overseas or
        were in close contact of a confirmed case, then you need to self isolate
        for 14 days. If you have tested positive for coronavirus, then you need
        have no symptoms for atleast 72 hours AND it has been 10 days since the
        start of your symptoms.
      </p>,
    ],
    source: {
      linkTo:
        "https://www.health.gov.au/news/health-alerts/novel-coronavirus-2019-ncov-health-alert/how-to-protect-yourself-and-others-from-coronavirus-covid-19/self-isolation-self-quarantine-for-coronavirus-covid-19",
      linkDisplay:
        "Australian Health Department of Health Coronavirus Guidance",
    },
  },
  {
    question: "Should I stop going to the gym/yoga/etc? ",
    answerParagraphs: [
      <p key={shortid.generate()} className={styles.questionAnswer}>
        "All indoor facilities such as gyms, pools, yoga, cycle faciltiies are
        closed. However, it is important to stay active. Exercising at home is
        preferable; you can find more about how to exercise at home{" "}
        {createParagraphLink(
          "https://patient.info/news-and-features/how-to-exercise-at-homein-isolation",
          "here"
        )}
        {". "}
        You can also go outside to exercise in the open air, but be sure to
        maintain at least 1.5m of distance from others.
      </p>,
    ],
    source: {
      linkTo:
        "https://www.healthdirect.gov.au/coronavirus-covid-19-other-questions-faqs#gym",
      linkDisplay: "Health Direct Australia",
    },
  },

  {
    question: "Can I do my laundry if I'm ill?",
    answerParagraphs: [
      <p key={shortid.generate()} className={styles.questionAnswer}>
        You can do your laundry if you have a machine at home. It doesn't matter
        if there are others in your home who are not ill. Be sure to use laundry
        detergent. Use the hottest temperature setting if you can. Don't shake
        your laundry before washing as this may spread the virus. If you do your
        laundry in a public place, wait an extra 72 hours after the end of your
        10 day self-isolation to wash your clothes.
      </p>,
    ],
    source: {
      linkTo:
        "https://www.health.act.gov.au/about-our-health-system/novel-coronavirus-covid-19/quarantine-and-isolation/isolation-information-0",
      linkDisplay:
        "Australian Government Department of Health Coronavirus Guidance",
    },
  },
  {
    question: "How do I deal with my waste if I'm ill?",
    answerParagraphs: [
      <p key={shortid.generate()} className={styles.questionAnswer}>
        Gloves, masks and other contaminated items can be placed in a lined bin
        and disposed off with other household waste. Wash your hands for 20
        seconds with soap and water immideately after.
      </p>,
    ],
    source: {
      linkTo:
        "https://www.health.gov.au/news/health-alerts/novel-coronavirus-2019-ncov-health-alert/how-to-protect-yourself-and-others-from-coronavirus-covid-19/self-isolation-self-quarantine-for-coronavirus-covid-19",
      linkDisplay:
        "Australian Government Department of Health Coronavirus Guidance",
    },
  },

  {
    question: "Can I catch it from or give it to my pet?",
    answerParagraphs: [
      <p key={shortid.generate()} className={styles.questionAnswer}>
        There is no evidence that indicates a pet can transmit coronavirus.
        However, you should regularly wash your hands with soap after touching
        your pets and follow the more general advice{" "}
        <Link to="/au/how-you-can-help">here</Link>.
      </p>,
    ],
    source: {
      linkTo: "https://www.who.int/news-room/q-a-detail/q-a-coronaviruses",
      linkDisplay: "WHO Coronavirus Q&A",
    },
  },

  {
    question: "Is it safe to receive mail?",
    answerParagraphs: [
      <p key={shortid.generate()} className={styles.questionAnswer}>
        Yes. It is unlikely for an infected person to contaminate commercial
        packages. The risk of catching the virus from a package that was exposed
        to different environmental conditions as it travelled is also low.
      </p>,
    ],
    source: {
      linkTo: "https://www.who.int/news-room/q-a-detail/q-a-coronaviruses",
      linkDisplay: "WHO Coronavirus Q&A",
    },
  },

  /*  {
    question: "Should I wash my hands with soap or use hand sanitiser?",
    answerParagraphs: [
      <p key={shortid.generate()} className={styles.questionAnswer}>
        Washing your hands with soap for at least 20 seconds is the best way to
        avoid the virus. Soap breaks down the virus, and lubricates the virus
        away from the skin. If soap is not available, using an alcohol-based
        sanitiser gel is your next best option - ensure that every corner of
        your hands are soaked with the gel. Any sanitiser gel you use should be
        at least 60% alcohol.
      </p>,
    ],
    source: {
      linkTo: "https://www.cdc.gov/coronavirus/2019-ncov/index.html",
      linkDisplay: "CDC Coronavirus Guidance ",
    },
  },
  {
    question: "I have high blood pressure, heart disease, or diabetes",
    answerParagraphs: [
      <p key={shortid.generate()} className={styles.questionAnswer}>
        You are at an increased risk of developing severe illness. If you have
        symptoms, you should find out what to do next{" "}
        <a
          href="https://111.nhs.uk/service/COVID-19/"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        . If you do not have symptoms, you should lower your risk of disease by
        significantly minimising contact in public settings and following the
        steps outlined{" "}
        <Link to={`${countryDetails.au.abbreviation}/how-you-can-help`}>
          here
        </Link>
        .
      </p>,
    ],
    source: {
      linkTo:
        "https://www.gov.uk/government/publications/covid-19-stay-at-home-guidance/stay-at-home-guidance-for-people-with-confirmed-or-possible-coronavirus-covid-19-infection",
      linkDisplay: "NHS and Public Health England Coronavirus Guidance ",
    },
  }, */
]

const FAQPage = () => {
  return (
    <Layout>
      <SEO
        title="FAQs"
        description="Soap or hand sanitiser? Should I wear a mask? What should I do next? The top coronavirus FAQs answered here."
      />
      <BasicPage activeCountry="au">
        <FAQ title="Your Questions Answered" faqContent={faqContent} />
      </BasicPage>
    </Layout>
  )
}

export default FAQPage
