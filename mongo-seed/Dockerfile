# This was originally written by Daniel Kenner to automate creating the development environment for the CSynapse Final Project

# Use phusion/baseimage as base image.
FROM phusion/baseimage:0.9.19

# Use baseimage-docker's init system.
#CMD ["/sbin/my_init"]
#THIS NEEDS TO BE FIXED...I'M JUST TOO TIRED RIGHT NOW.

# ...put your own build instructions here...

RUN apt-get update

RUN apt-get install -y mongodb

ADD ./initDB.js /opt/csynapse/initDB.js

CMD mongo --host mongo --port 27017 < /opt/csynapse/initDB.js

# Clean up APT when done.
RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
