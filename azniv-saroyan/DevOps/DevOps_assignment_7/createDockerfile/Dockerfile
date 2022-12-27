ARG BASE_IMAGE_VERSION
FROM ubuntu:${BASE_IMAGE_VERSION}
RUN apt update && apt install -y nginx
COPY Beers/ /var/www/html/.
ARG EXPOSE_PORT
EXPOSE ${EXPOSE_PORT}
CMD ["/usr/sbin/nginx", "-g", "daemon off;"]