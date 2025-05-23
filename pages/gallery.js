import { useEffect, useState } from 'react';
import axios from 'axios';

export default function GalleryPage() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/gallery')
      .then((res) => setImages(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Student Gallery</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '20px'
      }}>
        {images.map((img) => (
          <div key={img._id}>
            <img src={img.imageUrl} alt={img.caption} style={{ width: '100%', borderRadius: '10px' }} />
            <p style={{ textAlign: 'center' }}>{img.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
