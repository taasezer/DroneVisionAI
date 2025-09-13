# DroneVisionAI

**İHA'lar için Akıllı Görüntü İşleme ve Tanıma Sistemi**

## Proje Yapısı
```` bash
DroneVisionAI/
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── ...
│
├── .github/
│   └── workflows/
│       └── python-test.yml
│
├── docs/
│   ├── setup.md
│   ├── api_reference.md
│   └── examples.md
│
├── src/
│   ├── main.py
│   ├── models/
│   │   └── detection.py
│   ├── utils/
│   │   ├── image_processor.py
│   │   └── db_manager.py
│   └── config.py
│
├── tests/
│   ├── test_api.py
│   ├── test_image_processing.py
│   └── test.jpg
│
├── requirements.txt
├── README.md
└── LICENSE

````


[![Python](https://img.shields.io/badge/python-3.8+-blue.svg)](https://www.python.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.95.0-green)](https://fastapi.tiangolo.com/)
[![YOLOv8](https://img.shields.io/badge/YOLOv8-Ultralytics-orange)](https://github.com/ultralytics/ultralytics)
[![EasyOCR](https://img.shields.io/badge/EasyOCR-1.7.0-red)](https://github.com/JaidedAI/EasyOCR)

---

### Özellikler
- ✅ Gerçek zamanlı nesne tanıma (YOLOv8)
- ✅ Metin tanıma (EasyOCR)
- ✅ FastAPI tabanlı REST API
- ✅ SQLite veri kaydı
- ✅ İHA görüntü akışı entegrasyonu

---

### Kurulum
1. **Bağımlılıkları yükleyin:**
   ```bash
   pip install -r requirements.txt

2. **API'yi çalıştırın:**
   ```bash
   uvicorn src.main\:app --reload
   ```
3. **Test Edin:**
   ```bash
   pytest tests/
   ```

---

### Projeyi Çalıştırma
1. **Bağımlılıkları yükleyin:**
   ```bash
   pip install -r requirements.txt
   ```
2. **API'yi başlatın:
   ````bash
   uvicorn src.main:app --reload
   ````
   
3. **Testleri çalıştırın:**
   ````bash
   pytest tests/
   ````
4. **Frontendi Çalışırma**
  - Frontend için frontend/ klasörünü oluşturun ve React projesi başlatın:
   ```bash
    npx create-react-app frontend
    cd frontend
    npm install axios
   ```
   - Frontend'i başlatmak için:
   ```bash
      cd frontend
      npm start
   ```
5. **Backend ve Frontend Birlikte Çalıştırma**
   - Frontendi Çalıştırın
     ```bash
     cd frontend
     npm start
     ```
   - Backendi Çalıştırın
     ```bash
     uvicorn src.main:app --reload
     ````

   
## Geliştirme ve Katkı
Proje açık kaynak olarak geliştirilmekte olup, katkılarınızı memnuniyetle karşılarız.
Lütfen hata bildirmek veya özellik talep etmek için issue açınız. Pull request göndermekten çekinmeyiniz.

## İletişim
- Herhangi bir soru veya destek talebi için aşağıdaki iletişim adresleri kullanılabilir:

## E-posta: [taha.sezer@istun.edu.tr]
    
