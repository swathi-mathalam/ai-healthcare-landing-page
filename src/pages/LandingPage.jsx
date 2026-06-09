import React, {
    useEffect,
    useState,
} from "react";
import { getLandingContent } from "../api/api";

import Header from "../sections/Header";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Statistics from "../sections/Statistics";
import Services from "../sections/Services";
import FeaturedDoctors from "../sections/FeaturedDoctors";
import Testimonials from "../sections/Testimonials";
import FAQ from "../sections/FAQ";
import ContactUs from "../sections/ContactUs";
import Newsletter from "../sections/Newsletter";
import Footer from "../sections/Footer";

import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";


const LandingPage = () => {
    const [data, setData] =
        useState([]);

    const [loading, setLoading] =
        useState(true);

    const [error, setError] =
        useState("");

    useEffect(() => {
        fetchLandingData();
    }, []);

    const fetchLandingData =
        async () => {
            try {
                const result =
                    await getLandingContent();

                console.log(
                    "API Data:",
                    result
                );

                setData(result);
            } catch (err) {
                console.error(err);

                setError(
                    "Failed to load data"
                );
            } finally {
                setLoading(false);
            }
        };

    if (!data?.length) {
  return <div>Loading...</div>;
}

    if (error) {
    return <ErrorMessage message={error} />;
}

    // Header
    const headerData =
        data.find(
            (item) =>
                item.type === "header"
        ) || {};

    // Hero
    const heroData =
        data.find(
            (item) =>
                item.type === "hero"
        ) || {};

    // About
    const aboutData =
        data.find(
            (item) =>
                item.type === "about"
        ) || {};

    // Statistics
    const statisticsData =
        data.filter(
            (item) =>
                item.type === "stat"
        );

    // Services
    const servicesData =
        data.filter(
            (item) =>
                item.type === "service"
        );

    // Doctors
    const doctorsData =
        data.filter(
            (item) =>
                item.type === "doctor"
        );

    // Testimonials
    const testimonialsData =
        data.filter(
            (item) =>
                item.type ===
                "testimonial"
        );

    // FAQ
    const faqData =
        data.filter(
            (item) =>
                item.type === "faq"
        );
    const contactData =
        data.find((item) => item.type === "contact") || {};

    const newsletterData = data.find(i => i.type === "newsletter") || {};
    const footerData = data.find(i => i.type === "footer") || {};

    return (
    <>
        <Header data={headerData} />

        <section id="home">
            <Hero data={heroData} />
        </section>

        <section id="about">
            <About data={aboutData} />
        </section>

        <section id="statistics">
            <Statistics data={statisticsData} />
        </section>

        <section id="services">
            <Services data={servicesData} />
        </section>

        <section id="doctors">
            <FeaturedDoctors data={doctorsData} />
        </section>

        <section id="testimonials">
            <Testimonials data={testimonialsData} />
        </section>

        <section id="faq">
            <FAQ data={faqData} />
        </section>

        <section id="contact">
            <ContactUs data={contactData} />
        </section>

        <section id="newsletter">
            <Newsletter data={newsletterData} />
        </section>

        <Footer data={footerData} />
    </>
);
};

export default LandingPage;