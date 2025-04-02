# plant-care-app

Cloud-native application designed with microservices architecture, deployed on GCP with Kubernetes. Using React/Next.js for frontend, Node.js and Express.js for backend. Firestore as the database.

Pushing to Docker Repo
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

Pushing to GCP Artifact Registry
1. Make sure you have built the latest version of your image
   docker-compose build
   
2. Tag the image with desired name and tag
   docker tag [original-image-name]:[tag] [server-region]-docker.pkg.dev/[project-id]/[repository-name]/[desired-image-name]:[tag]
   Example for the user-service: docker tag plantcareapp-user-service:latest australia-southeast2-docker.pkg.dev/sit323-25t1-shrimpton-1271627/plant-care-app/user-service:functional

3. Push the image to GCP registry
   docker push [server-region]-docker.pkg.dev/[project-id]/[repository-name]/[image-name]:[tag]
   Example for the user-service: docker push australia-southeast2-docker.pkg.dev/sit323-25t1-shrimpton-1271627/plant-care-app/user-service:functional

4. Verify boot from Docker image
   docker run [server-region]-docker.pkg.dev/[project-id]/[repository-name]/[image-name]:[tag]
   Example for the user-service: docker run australia-southeast2-docker.pkg.dev/sit323-25t1-shrimpton-1271627/plant-care-app/user-service:functional
   
