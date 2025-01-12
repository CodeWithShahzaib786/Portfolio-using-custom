import '../app/styles/card.css';
import { useEffect, useState } from "react";
import Image from "next/image";

const Card: React.FC<{ title: string, desc: string, img: string, tags: string[] }> = ({ title, desc, img, tags }) => {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  // Update window width only on the client-side
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
    }
  }, []);

  return (
    <div className={`card ${windowWidth >= 640 ? 'card-sm' : ''}`} data-aos="zoom-in-up">
      <div>
        <Image 
          className={`card-image ${windowWidth >= 640 ? 'card-image-sm' : ''}`} 
          src={img} 
          alt={title} 
          width={500} 
          height={300}
        />
      </div>
      <h3>{title}</h3>
      <p>{desc}</p>
      <div>{tags.map(tag => <span key={tag}>{tag}</span>)}</div>
    </div>
  );
};

export default Card;
