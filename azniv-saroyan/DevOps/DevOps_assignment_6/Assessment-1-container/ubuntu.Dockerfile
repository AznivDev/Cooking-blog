FROM ubuntu:latest
RUN apt-get update && apt install -y nginx
COPY Assessment1/Nike /var/www/html/.
LABEL maintainer = "Azniv Saroyan"
EXPOSE 80
EXPOSE 443
CMD ["/usr/sbin/nginx", "-g", "daemon off;"]
