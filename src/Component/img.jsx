import img1 from "../assets/pexels-francesco-ungaro-544249.jpg";
import img2 from "../assets/pexels-hedaetul-734785.jpg";
import img3 from "../assets/pexels-marek-piwnicki-3907296-8387399.jpg";
import img4 from "../assets/pexels-nilsr-28104811.jpg";
import "./hero.css";

const img = ({ count }) => {
  if (count === 0) {
    return <img src={img1} alt="" className="background fade-in" />;
  } else if (count === 1) {
    return <img src={img2} alt="" className="background fade-in" />;
  } else if (count === 2) {
    return <img src={img3} alt="" className="background fade-in" />;
  } else if (count === 3) {
    return <img src={img4} alt="" className="background fade-in" />;
  }
};

export default img;
