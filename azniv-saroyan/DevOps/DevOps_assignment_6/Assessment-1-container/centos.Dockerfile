FROM centos:7
RUN yum -y update
RUN yum install epel-release -y
RUN yum -y install nginx
COPY Assessment1/Nike /usr/share/nginx/html/.
LABEL maintainer = "Azniv Saroyan"
EXPOSE 80
EXPOSE 443
CMD [ "/usr/sbin/nginx", "-g", "daemon off;" ]


