# This was originally written by Daniel Kenner to automate creating the development environment for the CSynapse Final Project

# Use phusion/baseimage as base image.
FROM phusion/baseimage:0.9.19

# Use baseimage-docker's init system.
CMD ["/sbin/my_init"]

# ...put your own build instructions here...

RUN apt-get update

RUN apt-get install -y apache2 php php-pdo libapache2-mod-php php-curl

ADD ./code /var/www/html/

ADD ./start.sh /etc/build/start.sh

ADD ./conf/php.ini /etc/php/7.0/apache2/php.ini

ADD ./conf/apache2.conf /etc/apache2/apache2.conf

# CMD "/bin/bash"
CMD "/etc/build/start.sh"

# Clean up APT when done.
RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

