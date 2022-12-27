FROM centos:7
RUN yum install epel-release -y
RUN yum -y update && yum -y install httpd 
COPY Assessment1/Nike /var/www/html/.
LABEL maintainer = "Azniv Saroyan"
EXPOSE 80
EXPOSE 443
CMD ["/usr/sbin/httpd", "-D", "FOREGROUND"]

