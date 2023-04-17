import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import Footer from "../../components/Footer/Footer";
import img from "../../assets/WRONGpng.png";
import "./SomethingWentWrong.css";

const SomethingWentWrongPage = () => {
  return (
    <div>
      <HeaderComponent />
      <div className="something-went-wrong-page-img-container">
        <img src={img} alt="" className="something-went-wrong-page-img" />
      </div>
      <Footer />
    </div>
  );
};

export default SomethingWentWrongPage;
