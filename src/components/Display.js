import Feature from "./Body/Feature";
import Learn_Support_Page from "./Body/Learn_Support";
import Pricing_Page from "./Body/Pricing";
import Tutorial_Page from "./Body/Tutorials";
import Header from "./Header/Header";

const Display_Content = () => {
  return (
    <div>
      <Header />
      <Feature />
      <Pricing_Page />
      <Learn_Support_Page />
      <Tutorial_Page />
    </div>
  );
};

export default Display_Content;
