
# golang:onbuild automatically copies the package source, 
# fetches the application dependencies, builds the program, 
# and configures it to run on startup 
FROM golang:latest
LABEL Name=docker-golang Version=0.0.1 
EXPOSE 18888
WORKDIR /root

ADD install-node.sh .

RUN /bin/bash install-node.sh
