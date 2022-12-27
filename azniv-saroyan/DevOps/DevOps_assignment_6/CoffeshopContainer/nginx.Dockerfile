FROM nginx:latest
RUN apt-get update && apt install -y nginx
COPY CoffeeShop/ /usr/share/nginx/html/.
LABEL maintainer = "Azniv Saroyan"
EXPOSE 80
EXPOSE 443
CMD ["/usr/sbin/nginx", "-g", "daemon off;"]


