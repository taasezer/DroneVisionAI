`docs/api_reference.md`
```markdown
# API Referansı

## Endpoint'ler

### `POST /upload/`
İHA'dan gelen görüntüyü yükleyip işler.

**İstek:**
- `file`: Yüklemek için görüntü dosyası.

**Yanıt:**
```json
{
  "status": "success",
  "detections": [
    {
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