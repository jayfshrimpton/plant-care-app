# plant-care-app

Cloud-native application designed with microservices architecture, deployed on GCP with Kubernetes. Using React/Next.js for frontend, Node.js and Express.js for backend. Firestore as the database.

1. Create a Dockerfile (no extension)

2. Build the Docker Image
   docker-compose build

3. Create a Docker Compose file
   (docker-compose.yml)

4. Start the Docker Compose environment
   docker-compose up

5. Test the application
   Open on localhost and make sure it is running

6. Push the image to registry
   docker tag plantcareapp-frontend jayfshrimpton/plantcareapp:latest
   docker push jayfshrimpton/plantcareapp:latest
