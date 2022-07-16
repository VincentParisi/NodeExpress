docker build -t nodeexpress . 
docker run --name nodeexpress  -p 8090:8090 -d nodeexpress
docker stop container  [83c234d5dc39]
docker container rm nodeexpress

docker image  rm nodeexpress
