FROM ubuntu:latest
RUN apt-get update && apt-get install -y apache2
COPY CoffeeShop/ /var/www/html/.
LABEL maintainer = "Azniv Saroyan"
EXPOSE 80 
EXPOSE 443
CMD ["apachectl", "-D", "FOREGROUND"]