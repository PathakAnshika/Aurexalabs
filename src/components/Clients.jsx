
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const clients = [
  {
    number: "01",
    name: "A K RAGHVAN",
    project: "SHRI CHANDRESHWAR DHAM",
    type: "WEBSITE DEVELOPMENT",
    category: "DIGITAL EXPERIENCE",
    slug: "shri-chandreshwar-dham-mandir",
  },
  {
    number: "02",
    name: "PRINCE PANDEY",
    project: "DIGITAL PRESENCE",
    type: "WEB DEVELOPMENT",
    category: "WEB SOLUTION",
    slug: "prinvick",
  },
  {
    number: "03",
    name: "SHREYA PATIL",
    project: "VISUAL DIRECTION",
    type: "DESIGN",
    category: "VISUAL DESIGN",
    slug: "nikita-singh",
  },
  {
    number: "04",
    name: "ARJUN BANSAL",
    project: "DOCUMENT SCANNING & DATA MANAGEMENT",
    type: "APPLICATION DEVELOPMENT",
    category: "BUSINESS SOFTWARE",
    slug: "md-shamim-durani",
  },
];

export default function Clients() {
  return (
    <section className="aurexa-clients" id="clients">

      {/* HEADER */}
      <div className="aurexa-clients-header">

        <motion.div
          className="aurexa-clients-label"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="aurexa-label-dot" />
          CLIENTS & COLLABORATIONS / 06
        </motion.div>

        <div className="aurexa-clients-heading">

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Good work starts
            <br />
            with <em>good people.</em>
          </motion.h2>

          <motion.div
            className="aurexa-clients-description"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p>
              Every collaboration begins with an idea, a challenge
              or an opportunity to build something better.
            </p>

            <p>
              Here are a few of the people and projects that
              have been part of our journey.
            </p>
          </motion.div>

        </div>
      </div>

      {/* CLIENT LIST */}
      <div className="aurexa-client-list">

        <div className="aurexa-client-list-heading">
          <span>CLIENT / PROJECT</span>
          <span>ENGAGEMENT</span>
          <span>EXPLORE</span>
        </div>

        {clients.map((client, index) => (
          <motion.div
            key={client.number}
            className="aurexa-client-row"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: index * 0.08,
            }}
          >

            <div className="aurexa-client-info">

              <span className="aurexa-client-number">
                {client.number}
              </span>

              <div className="aurexa-client-name-wrap">
                <h3>{client.name}</h3>

                <span className="aurexa-client-project">
                  {client.project}
                </span>
              </div>

            </div>

            <div className="aurexa-client-engagement">

              <span className="aurexa-client-category">
                {client.category}
              </span>

              <span className="aurexa-client-type">
                {client.type}
              </span>

            </div>

            <Link
              href={`/clients/${client.slug}`}
              className="aurexa-client-link"
              aria-label={`Explore ${client.project}`}
            >
              <span>VIEW PROJECT</span>
              <span className="aurexa-client-arrow">↗</span>
            </Link>

          </motion.div>
        ))}

      </div>

      {/* BOTTOM */}
      <motion.div
        className="aurexa-clients-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span>BUILT ON IDEAS. STRENGTHENED BY COLLABORATION.</span>
        <span>04 / SELECTED PROJECTS</span>
      </motion.div>

      <style jsx global>{`

        .aurexa-clients {
          position: relative;
          width: 100%;
          padding: 125px 5vw 110px;
          background: #101010;
          color: #eeeae4;
          overflow: hidden;
        }

        /* HEADER */

        .aurexa-clients-header {
          margin-bottom: 85px;
        }

        .aurexa-clients-label {
          display: flex;
          align-items: center;
          gap: 11px;
          color: #77716b;
          font-size: 9px;
          letter-spacing: 0.22em;
        }

        .aurexa-label-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #c7ff00;
        }

        .aurexa-clients-heading {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          align-items: end;
          gap: 50px;
          margin-top: 35px;
        }

        .aurexa-clients-heading h2 {
          margin: 0;
          font-size: clamp(48px, 6.5vw, 88px);
          line-height: 0.95;
          font-weight: 400;
          letter-spacing: -0.065em;
        }

        .aurexa-clients-heading h2 em {
          color: #c7ff00;
          font-style: normal;
        }

        .aurexa-clients-description {
          max-width: 390px;
          padding-bottom: 5px;
        }

        .aurexa-clients-description p {
          margin: 0 0 12px;
          color: #858079;
          font-size: 13px;
          line-height: 1.9;
        }

        /* CLIENT LIST */

        .aurexa-client-list {
          width: 100%;
          border-top: 1px solid rgba(238, 234, 228, 0.17);
        }

        .aurexa-client-list-heading {
          display: grid;
          grid-template-columns: 1.4fr 0.8fr 150px;
          padding: 18px 12px;
          color: #625d57;
          font-size: 8px;
          letter-spacing: 0.2em;
        }

        .aurexa-client-row {
          display: grid;
          grid-template-columns: 1.4fr 0.8fr 150px;
          align-items: center;
          min-height: 125px;
          padding: 25px 12px;
          border-top: 1px solid rgba(238, 234, 228, 0.1);
          transition:
            background 0.35s ease,
            padding 0.35s ease;
        }

        .aurexa-client-row:last-child {
          border-bottom: 1px solid rgba(238, 234, 228, 0.1);
        }

        .aurexa-client-row:hover {
          background: rgba(238, 234, 228, 0.025);
          padding-left: 20px;
          padding-right: 20px;
        }

        .aurexa-client-info {
          display: flex;
          align-items: flex-start;
          gap: 27px;
        }

        .aurexa-client-number {
          padding-top: 7px;
          color: #625d57;
          font-size: 10px;
          letter-spacing: 0.1em;
        }

        .aurexa-client-name-wrap h3 {
          margin: 0;
          color: #eeeae4;
          font-size: clamp(18px, 2vw, 25px);
          font-weight: 400;
          letter-spacing: -0.045em;
          transition: color 0.3s ease;
        }

        .aurexa-client-row:hover .aurexa-client-name-wrap h3 {
          color: #c7ff00;
        }

        .aurexa-client-project {
          display: block;
          margin-top: 9px;
          color: #77716b;
          font-size: 9px;
          letter-spacing: 0.13em;
          line-height: 1.6;
        }

        /* ENGAGEMENT */

        .aurexa-client-engagement {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .aurexa-client-category {
          color: #c7ff00;
          font-size: 8px;
          letter-spacing: 0.16em;
        }

        .aurexa-client-type {
          color: #8a847d;
          font-size: 10px;
          letter-spacing: 0.08em;
        }

        /* LINK */

        .aurexa-client-link {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 15px;
          color: #8a847d;
          text-decoration: none;
          font-size: 8px;
          letter-spacing: 0.15em;
          transition: color 0.3s ease;
        }

        .aurexa-client-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border: 1px solid rgba(238, 234, 228, 0.2);
          border-radius: 50%;
          color: #eeeae4;
          font-size: 15px;
          transition: all 0.3s ease;
        }

        .aurexa-client-link:hover {
          color: #c7ff00;
        }

        .aurexa-client-link:hover .aurexa-client-arrow {
          color: #101010;
          background: #c7ff00;
          border-color: #c7ff00;
          transform: translate(2px, -2px);
        }

        /* BOTTOM */

        .aurexa-clients-bottom {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          padding-top: 22px;
          color: #625d57;
          font-size: 8px;
          letter-spacing: 0.16em;
        }

        /* TABLET */

        @media (max-width: 800px) {

          .aurexa-clients {
            padding-top: 95px;
            padding-bottom: 85px;
          }

          .aurexa-clients-heading {
            grid-template-columns: 1fr;
            gap: 25px;
          }

          .aurexa-clients-description {
            max-width: 480px;
          }

          .aurexa-client-list-heading,
          .aurexa-client-row {
            grid-template-columns: 1.3fr 0.8fr 110px;
          }

          .aurexa-client-info {
            gap: 15px;
          }

        }

        /* MOBILE */

        @media (max-width: 560px) {

          .aurexa-clients {
            padding: 80px 5vw 70px;
          }

          .aurexa-clients-header {
            margin-bottom: 55px;
          }

          .aurexa-clients-heading {
            margin-top: 28px;
            gap: 20px;
          }

          .aurexa-clients-heading h2 {
            font-size: clamp(43px, 12vw, 65px);
          }

          .aurexa-clients-description p {
            font-size: 12px;
          }

          .aurexa-client-list-heading {
            display: none;
          }

          .aurexa-client-row {
            grid-template-columns: 1fr auto;
            gap: 18px;
            min-height: auto;
            padding: 25px 5px;
          }

          .aurexa-client-row:hover {
            padding-left: 10px;
            padding-right: 10px;
          }

          .aurexa-client-info {
            gap: 13px;
          }

          .aurexa-client-name-wrap h3 {
            font-size: 19px;
          }

          .aurexa-client-project {
            font-size: 8px;
            max-width: 230px;
          }

          .aurexa-client-engagement {
            grid-column: 1;
            margin-left: 28px;
            gap: 6px;
          }

          .aurexa-client-link {
            grid-column: 2;
            grid-row: 1 / span 2;
            align-self: center;
            gap: 0;
          }

          .aurexa-client-link > span:first-child {
            display: none;
          }

          .aurexa-client-arrow {
            width: 32px;
            height: 32px;
          }

          .aurexa-clients-bottom {
            flex-direction: column;
            gap: 12px;
            font-size: 7px;
            line-height: 1.7;
          }

        }

      `}</style>

    </section>
  );
}
