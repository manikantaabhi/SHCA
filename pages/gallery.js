import { useEffect, useState } from 'react';
import axios from 'axios';

export default function GalleryPage() {
  const [images, setImages] = useState([]);
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
  useEffect(() => {
    axios.get(`${baseURL}/api/gallery`)
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
