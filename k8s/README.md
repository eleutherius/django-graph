## Docker build and run
```bash
docker build -t django-graph .
docker run -p 8000:8000 django-graph
docker tag django-graph:latest eleutherius69/django-graph:latest
docker push eleutherius69/django-graph:latest
```
## Kubernetes build and run

```bash
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
```