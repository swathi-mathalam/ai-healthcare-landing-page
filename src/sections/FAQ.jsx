import React, {
  useState,
} from "react";
import "./FAQ.scss";
import SectionHeader from "../components/SectionHeader";

const FAQ = ({ data }) => {
  const [openIndex, setOpenIndex] =
    useState(null);

  const handleToggle = (
    index
  ) => {
    setOpenIndex(
      openIndex === index
        ? null
        : index
    );
  };

  return (
    <section
      className="faq"
      id="faq"
    >
      <div className="faq__container">
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="Find answers to common healthcare-related questions."
        />

        {data?.length > 0 ? (
          data.map(
            (item, index) => (
              <div
                className="faq-item"
                key={item.id}
              >
                <div
                  className="faq-question"
                  onClick={() =>
                    handleToggle(
                      index
                    )
                  }
                >
                  <h3>
                    {item.question}
                  </h3>

                  <span>
                    {openIndex ===
                    index
                      ? "−"
                      : "+"}
                  </span>
                </div>

                {openIndex ===
                  index && (
                  <div className="faq-answer">
                    <p>
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            )
          )
        ) : (
          <p>
            No FAQs Available
          </p>
        )}
      </div>
    </section>
  );
};

export default FAQ;