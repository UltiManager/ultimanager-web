apiVersion: apps/v1
kind: Deployment
metadata:
  name: ultimanager-web
  labels:
    app: ultimanager-web
spec:
  replicas: 3
  selector:
    matchLabels:
      app: ultimanager-web
  template:
    metadata:
      labels:
        app: ultimanager-web
    spec:
      containers:
        - name: ultimanager-web
          image: @IMAGE_REPO@/@IMAGE_NAME@:@IMAGE_TAG@
          env:
            - name: API_HOSTNAME
              valueFrom:
                configMapKeyRef:
                  name: domains-config
                  key: API_DOMAIN

            # Kubernetes uses parentheses for environment variable interpolation
            # unlike shell interpolation with curly braces.
            - name: ULTIMANAGER_API_ROOT
              value: "https://$(API_HOSTNAME)"

          resources:
            requests:
              cpu: 50m
              memory: 5Mi

            limits:
              memory: 10Mi
