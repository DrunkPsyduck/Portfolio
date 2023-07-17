import Typewriter from "typewriter-effect";
// import Draw from "../../components/Draw";
import SocialIcons from "../../components/SocialIcons";
import { Link } from "react-router-dom";
// import landingImage from "../../images/me2.png"
// import { motion } from "framer-motion";

const Landing = ({ name }) => {
  const styles = {
    landing: {
      height: "calc(100% - 93px)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    landingImage: {
      position: "absolute",
      bottom: "0",
      opacity: "0.3",
      mixBlendMode: "lighten",
      height: "90%",
    },

    textContainer: {
      display: "flex",
      flexDirection: "column",
      letterSpacing: "1px",
      textAlign: "center",
      zIndex: "1",
      color: "#fff",
      textShadow: "1px 1px 3px #000",
    },

    name: {
      color: "#fff",
      fontWeight: "700",
      marginTop: "-100px",
      paddingBottom: "28px",
    },

    link:{
      TextDecoration: 'none',
      paddingTop: '10px'
    }
  };
  
  return (
    <section className="landing" style={styles.landing}>
      <div className="textContainer" style={styles.textContainer}>
        <h1 className="name" style={styles.name}>
          {name}
        </h1>
        <div className="description  mb-4">
          <Typewriter
            className="description"
            onInit={(typewriter) => {
              typewriter
                .typeString("Desarrollador Full Stack")
                .pauseFor(1500)
                .deleteChars(10)
                .pauseFor(500)
                .typeString("Multiplataforma")
                .pauseFor(1500)
                .deleteAll()
                .typeString("Traigo tus ideas a la vida")
                .start();
            }}
          />
        </div>
        <div className="m-4 m p-6 btncontainer">
          <Link className="btn m-4 downloadCV" to="/about">
            Conoceme
          </Link>
          <Link
            className="btn m-4 downloadCV"
            style={styles.link}
            to="/portfolio"
          >
            Portfolio
          </Link>
        </div>
      </div>
      <div className="image-container">
        {/* <motion.img
          className="landingImage"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={styles.landingImage}
          src={landingImage}
          alt="Soy yo"
        /> */}

        <SocialIcons />
      </div>
    </section>
  );
};

export default Landing;
