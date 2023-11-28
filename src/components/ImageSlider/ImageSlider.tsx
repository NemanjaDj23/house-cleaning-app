import { Zoom } from 'react-slideshow-image';
import slide1 from '../../images/slide-1.jpeg';
import slide2 from '../../images/slide-2.jpeg';
import slide3 from '../../images/slide-3.jpeg';
import slide4 from '../../images/slide-4.jpeg';
import slide5 from '../../images/slide-5.jpeg';
import slide6 from '../../images/slide-6.jpeg';
import slide7 from '../../images/slide-7.jpeg';
import 'react-slideshow-image/dist/styles.css';
import useMatchMedia from '../../hooks/useMatchMedia';

const ImageSlider = () => {
  const isTabletResolution = useMatchMedia('(max-width:992px)', true);

  const images = [slide1, slide2, slide3, slide4, slide5, slide6, slide7];

  return (
    <Zoom scale={1.4} indicators={false} arrows={false} pauseOnHover={false} duration={800}>
      {images.map((imageSrc, index) => (
        <div
          key={index}
          style={{
            height: `${isTabletResolution ? 'auto' : '85vh'}`,
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          <img
            style={{ objectFit: 'cover', width: '100%' }}
            alt={'Slide-' + (index + 1)}
            src={imageSrc}
          />
        </div>
      ))}
    </Zoom>
  );
};

export default ImageSlider;
