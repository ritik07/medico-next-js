import React from "react";
import styles from "./terms-and-conditions.module.scss";

const TermsAndConditions = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Terms and Conditions</h1>
      <section className={styles.section}>
        <h2 className={styles.heading}>Admission Policy</h2>
        <p>
          Medico Overseas Consultancy has established a policy for the admission of international
          students to universities in various locations around the world in the MBBS course offered.
          This admission policy shall be supplementary to the existing general admission policies and
          procedures of the preferred university.
        </p>
        <p>
          The colleges will only seek admissions for applicants who are highly qualified, have good
          NEET scores, and whose enrollment can be readily accommodated by the institution.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>Faculty Hiring Policy</h2>
        <p>
          Medico Overseas Consultancy is committed to creating a diverse community of faculty in all
          universities that is inclusive, responsive, and supportive. Medico seeks to promote
          diversity in its many manifestations based on race, nationality, financial status, gender
          identity, sexual orientation, religion, disability, and place of origin.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>Ethics Policy</h2>
        <p>
          Medico Overseas Consultancy maintains a code of ethics in the workplace and during student
          counseling. Medico Overseas Consultancy will fulfill all the promises stated in its guiding
          statements, policies, contracts, or any promotional materials.
        </p>
        <p>
          We strive for excellence and aim to nurture a culture of care in which the education, safety,
          and well-being of students and others are the top priority. We respect the dignity and
          equality of everyone connected to us and promote global citizenship.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>Technology</h2>
        <p>
          Medico Overseas Consultancy promotes technological advancements because learning shouldn’t be
          limited to traditional educational settings.
        </p>
        <p>
          Most of the medical training approaches are designed specifically with new technology in
          mind, allowing colleges to achieve new heights.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>Education Delivery Policy</h2>
        <p>
          Medico Overseas Consultancy believes in providing quality education to all students studying
          abroad. That is why Medico ensures that the clinical training meets world-class standards in
          education delivery, facilities, and services and provides tuition fee protection to every
          student studying abroad.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>Data Protection Policy</h2>
        <p>
          Medico Overseas Consultancy is committed to protecting the privacy of students’ personal
          information. As part of this responsibility, we follow this arrangement to clarify our
          privacy and data protection practices, including what information we collect, how we use it,
          and what choices students have regarding the collection and use of their personal
          information.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>Human Resource Policy</h2>
        <p>
          Medico Overseas Consultancy follows every formal rule and procedure that dictates how
          certain matters should be addressed in the workplace, including employee rights and duties.
        </p>
        <p>
          As HR policies are tied to employment law, we avoid non-compliance and penalties from the
          government by adhering strictly to HR policies.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>Climate Change Policy</h2>
        <p>
          Medico Overseas Consultancy promises to play a leadership role in climate change by being
          knowledgeable, responsive, and adopting environmentally friendly technology and practices
          while pursuing our growth aspirations and supporting stakeholders.
        </p>
        <p>
          The company will measure its carbon footprint and strive to:
          <ul>
            <li>Lead by example in its industry segment regarding carbon footprint in its operations.</li>
            <li>
              Engage the Medico Overseas Consultancy family in climate change advocacy and reshaping its
              regulations in different verticals.
            </li>
            <li>Inculcate a “go green” perspective in all organizational processes.</li>
          </ul>
        </p>
      </section>
    </div>
  );
};

export default TermsAndConditions;
