import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const gifs = [
  'https://media.giphy.com/media/8UGVQESpDMMQl7yd3F/giphy.gif',
  'https://media.giphy.com/media/fxBaFXmFMbi6ft0WAk/giphy.gif',
  'https://media.giphy.com/media/f7JgDdTTa2bqmex2pb/giphy.gif',
  'https://media.giphy.com/media/2t9y1GpQpaIllCZ6NW/giphy.gif',
  'https://media.giphy.com/media/26AHyxxCItIbFijLO/giphy.gif',
];

export default function RandomGif() {
  const [randomGif, setRandomGif] = useState('');

 
  const getRandomGif = useCallback(() => {
    return gifs[Math.floor(Math.random() * gifs.length)];
  }, []); 

  useEffect(() => {
    setRandomGif(getRandomGif());
  }, [getRandomGif]);

  return (
    <div>
      <Image src={randomGif} width={480} height={269} alt="Encouraging GIF" />
    </div>
  );
}
