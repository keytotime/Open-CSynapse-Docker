# This was originally written by Daniel Kenner to automate creating the development environment for the CSynapse Final Project

# Use phusion/baseimage as base image.
FROM phusion/baseimage:0.9.19

# Use baseimage-docker's init system.
CMD ["/sbin/my_init"]

# ...put your own build instructions here...

RUN apt-get update

RUN apt-get install -y python-pip libmysqlclient-dev libssl-dev python-dev libffi-dev libxml2-dev libxslt1-dev zlib1g-dev

ADD ./code /opt/csynapse

RUN pip install -r /opt/csynapse/requirements.txt

CMD /opt/csynapse/infrastructure.py

# Clean up APT when done.
RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

