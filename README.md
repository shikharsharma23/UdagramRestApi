# Cloud Development with AWS 
### Udagram Rest API : Node app which exposes API for "Manage Data" ( RDS DB ) and Signed URL (S3 Filestore) aspect of a full stack app
### This app is setup in node, uses aws resources and then is deployed on elastic bean stalk using eb init and create commans
### RDS must have public access


Udagram is a simple cloud application  It allows users to register and log into a web client, post photos to the feed, and process photos using an image filtering microservice.

The project is split into three parts:
1. [The Simple Frontend] https://github.com/grutt/udacity-c2-frontend
A basic Ionic client web application which consumes the RestAPI Backend. 
2. [The RestAPI Backend]  - This Repo
3. [The Image Filtering Microservice] https://github.com/shikharsharma23/ImageFilteringMicroServiceCloudEBS
which runs a simple Python script to process images.


