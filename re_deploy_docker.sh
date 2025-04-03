#!/bin/bash

docker build -t django-graph  . --no-cache
docker tag django-graph:latest eleutherius69/django-graph:latest
docker push eleutherius69/django-graph:latest

cd ./k8s
kubectl delete -f deployment.yaml
kubectl delete -f service.yaml
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
