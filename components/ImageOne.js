import { Parallax } from 'react-parallax';
import image from "@/public/static/about.jpg";

const ImageOne = () => (
    <Parallax  bgImage={image} strength={800}>
        Content goes here. Parallax height grows with content height.
    </Parallax>
);
export default ImageOne;