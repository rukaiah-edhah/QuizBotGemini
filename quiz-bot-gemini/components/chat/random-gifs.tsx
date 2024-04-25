import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function RandomGif() {
  const gifs = [
    'https://media.giphy.com/media/8UGVQESpDMMQl7yd3F/giphy.gif',
    'https://media.giphy.com/media/fxBaFXmFMbi6ft0WAk/giphy.gif',
    'https://media.giphy.com/media/f7JgDdTTa2bqmex2pb/giphy.gif',
    'https://media.giphy.com/media/2t9y1GpQpaIllCZ6NW/giphy.gif',
    'https://media.giphy.com/media/26AHyxxCItIbFijLO/giphy.gif',

  ];

  const [randomGif, setRandomGif] = useState('');

  const getRandomGif = () => {
    return gifs[Math.floor(Math.random() * gifs.length)];
  };

  useEffect(() => {
    setRandomGif(getRandomGif());
  }, []);

  return (
    <div>
      <Image src={randomGif} width={480} height={269} alt="Encouraging GIF" />
    </div>
  );
}