`docs/examples.md`
```markdown
# Örnek Kullanımlar

## **GET /detections/**
**Yanıt:**
```bash
{
  "detections": [
    {
      "id": 1,
      "object_name": "bus",
      "confidence": 0.95,
      "x1": 100,
      "y1": 150,
      "x2": 300,
      "y2": 350,
      "timestamp": "2025-09-14T12:34:56"
    }
  ]
}
```

## Görüntü Yükleme
```bash
curl -X POST -F "file=@tests/test.jpg" http://localhost:8000/upload/
```
## Üm Tespitleri İzleme
```bash
curl http://localhost:8000/detections/
```