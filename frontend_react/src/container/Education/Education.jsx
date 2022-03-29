import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

import "./Education.scss";

const Education = () => {
  const [education, setEducation] = useState([]);
  const [hobbies, setHobbies] = useState([]);

  useEffect(() => {
    const query = '*[_type == "education"]';
    const hobbiesQuery = '*[_type == "hobbies"]';

    client.fetch(query).then((data) => {
      setEducation(data);
    });

    client.fetch(hobbiesQuery).then((data) => {
      setHobbies(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">
        Education <span>&</span> Hobbies
      </h2>

      <div className="app__hobbies-container">
        <motion.div className="app__hobbies-exp">
          {education.map((education) => (
            <motion.div className="app__hobbies-exp-item" key={education.year}>
              <div className="app__hobbies-exp-year">
                <p className="bold-text">{education.year}</p>
              </div>
              <motion.div className="app__hobbies-exp-works">
                {education.institutions.map((institution) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__hobbies-exp-institution"
                      data-tip
                      data-for={institution.name}
                      key={institution.name}
                    >
                      <h4 className="bold-text">{institution.name}</h4>
                      <p className="p-text">{institution.company}</p>
                    </motion.div>
                    {institution.desc && (
                      <ReactTooltip
                        id={institution.name}
                        effect="solid"
                        arrowColor="#fff"
                        className="hobbies-tooltip"
                      >
                        {institution.desc}
                      </ReactTooltip>
                    )}
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="app__hobbies-list">
          {hobbies.map((hobby) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__hobbies-item app__flex"
              key={hobby.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: hobby.bgColor }}
              >
                <img src={urlFor(hobby.icon)} alt={hobby.name} />
              </div>
              <p className="p-text">{hobby.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Education, "app__hobbies"),
  "education",
  "app__primarybg"
);
