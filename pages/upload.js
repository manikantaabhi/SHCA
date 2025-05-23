import { useState } from 'react';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { app } from '../utils/firebase';
import axios from 'axios';

const storage = getStorage(app);

export default function UploadPage() {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState('');

  const handleUpload = async () => {
    if (!image) return alert('Please select an image');

    const storageRef = ref(storage, `gallery/${image.name}`);
    try {
      // Upload image to Firebase Storage
      await uploadBytes(storageRef, image);

      // Get download URL
      const url = await getDownloadURL(storageRef);

      // Send to backend to save in MongoDB
      await axios.post('http://localhost:5000/api/gallery/add', {
        caption,
        imageUrl: url,
      });

      alert('Image uploaded successfully');
      setImage(null);
      setCaption('');
    } catch (err) {
      console.error(err);
      alert('Upload failed');
    }
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Upload Student Image</h2>
      <input type="file" onChange={(e) => setImage(e.target.files[0])} /><br /><br />
      <input
        type="text"
        placeholder="Enter caption"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      /><br /><br />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}
