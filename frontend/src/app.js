import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [file, setFile] = useState(null);
  const [detections, setDetections] = useState([]);
  const [imagePreview, setImagePreview] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setImagePreview(URL.createObjectURL(selectedFile));
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:8000/upload/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setDetections(response.data.detections);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  const fetchDetections = async () => {
    try {
      const response = await axios.get('http://localhost:8000/detections/');
      setDetections(response.data.detections);
    } catch (error) {
      console.error('Error fetching detections:', error);
    }
  };

  return (
    <div className="App">
      <h1>DroneVisionAI</h1>
      <div className="upload-section">
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload}>Yükle ve Analiz Et</button>
      </div>
      {imagePreview && (
        <div className="image-preview">
          <h2>Yüklenen Görüntü</h2>
          <img src={imagePreview} alt="Preview" />
        </div>
      )}
      <div className="detection-results">
        <h2>Tespit Sonuçları</h2>
        <button onClick={fetchDetections}>Tüm Tespitleri Getir</button>
        <ul>
          {detections.map((detection, index) => (
            <li key={index}>
              {detection.object_name && (
                <p>Nesne: {detection.object_name} (Güven: {detection.confidence?.toFixed(2)})</p>
              )}
              {detection.text && <p>Metin: {detection.text}</p>}
              <p>Konum: ({detection.x1}, {detection.y1}) - ({detection.x2}, {detection.y2})</p>
              <p>Zaman: {new Date(detection.timestamp).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
