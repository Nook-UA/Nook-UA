import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Always on time",
    Svg: require("@site/static/img/parking.svg").default,
    description: (
      <>
        Nook was designed so you don't have to worry about being late because of
        parking. Nook will show you the nearest parking spots and their
        availability.
      </>
    ),
  },
  {
    title: "Where you need it",
    Svg: require("@site/static/img/location.svg").default,
    description: (
      <>
        Don't get your eyes off the road. Nook will show you the nearest parking
        spots on your location and you get the location in your car.
      </>
    ),
  },
  {
    title: "Powered by statistics",
    Svg: require("@site/static/img/stats.svg").default,
    description: (
      <>
        Understand the parking situation in your city. Nook will show you useful
        insights about peak hours and parking spots availability, as well as
        most popular parking spots.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
