import image1 from '../images/wedding-images/DSC_3141.jpg';
import image2 from '../images/wedding-images/DSC_3158.jpg';
import image3 from '../images/wedding-images/LEX04335.jpg';
import image4 from '../images/wedding-images/LEX04396.jpg';
import image5 from '../images/wedding-images/LEX04410.jpg';

import '../scss/image.scss';


const Image = () => {

  return (
    <div id="Image">
        <div className="image-container">
            <img src={image1} alt="image-1"/>
            <img src={image2} alt="image-2"/>
            <img src={image3} alt="image-3"/>
            <img src={image4} alt="image-4"/>
            <img src={image5} alt="image-5"/>
        </div>
    </div>
  );
}


export default Image;