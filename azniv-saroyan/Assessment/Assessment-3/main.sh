set -e

read -p 'Please set Ubuntu version: ' BASE_IMAGE_VERSION
read -p 'Please set Expose port: ' EXPOSE_PORT
read -p 'Please set docker image name: ' Docker_image_name

docker build -t $Docker_image_name --build-arg BASE_IMAGE_VERSION=$BASE_IMAGE_VERSION --build-arg EXPOSE_PORT=$EXPOSE_PORT .

read -p 'Please set docker container name: ' Docker_container_name
read -p 'Please set Publish port: ' Pulish_port

docker run -d --name $Docker_container_name -p $Pulish_port:80 --restart=always $Docker_image_name