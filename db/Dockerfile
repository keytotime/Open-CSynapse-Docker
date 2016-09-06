# This was originally written by Daniel Kenner to automate creating the development environment for the CSynapse Final Project

# Use phusion/baseimage as base image.
FROM phusion/baseimage:0.9.19

# Use baseimage-docker's init system.
CMD ["/sbin/my_init"]

# ...put your own build instructions here...

RUN apt-get update

RUN apt-get install -y mariadb-server mariadb-client

#ADD ./code /var/www/html/

ADD ./create_sql.sql /etc/build/create_sql.sql

ADD ./start.sh /etc/build/start.sh

RUN service mysql start && mysql -h localhost -u root < /etc/build/create_sql.sql

RUN printf "\nbind-address = 0.0.0.0" >> /etc/mysql/my.cnf

#CMD "/bin/bash"

CMD "/etc/build/start.sh"

# Clean up APT when done.
RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

EXPOSE 3306