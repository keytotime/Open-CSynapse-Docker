# This was originally written by Daniel Kenner to automate creating the development environment for the CSynapse Final Project

# Use phusion/baseimage as base image.
FROM phusion/baseimage:0.9.19

# Use baseimage-docker's init system.
#CMD ["/sbin/my_init"]
#THIS NEEDS TO BE FIXED...I'M JUST TOO TIRED RIGHT NOW.

# ...put your own build instructions here...

RUN apt-get update

RUN apt-get install -y python-pip libssl-dev python-dev libffi-dev libxml2-dev libxslt1-dev zlib1g-dev libmemcached-dev git openjdk-8-jre libtiff5-dev libjpeg8-dev zlib1g-dev libfreetype6-dev liblcms2-dev libwebp-dev tcl8.6-dev tk8.6-dev python-tk --fix-missing

ADD ./code/requirements.txt /tmp/requirements.txt

RUN pip install -r /tmp/requirements.txt

ADD ./code /opt/csynapse

CMD /opt/csynapse/infrastructure.py

# Clean up APT when done.
RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

EXPOSE 8888