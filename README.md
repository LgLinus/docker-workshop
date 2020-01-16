# docker-workshop
Workshop, introduction to Docker

Resources

[Presentation link](https://docs.google.com/presentation/d/15BxRPWNLszlTtxt7T08k4iS0YHPWnYoRTirswOrM8M0/edit?usp=sharing)

[Docker setup](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-18-04)

### Setup
Folow the unstructions in the docker setup page. 

If you're behind a proxy, make sure to update the ~/.docker/config.json file as following

```json
{
        "proxies": {
                "default": {
                        "httpProxy": "yourproxy",
                        "httpsProxy": "yourproxy"
                }
        }
}
```

Also, you might have to create a configuration file for the docker service at /etc/systemd/system/docker.service.d/http-proxy.conf

```
[Service]
Environment="HTTPS_PROXY=yourproxy"
Environment="HTTP_PROXY=yourproxy"
```

If changes have been made restart the service, ex.
```
service docker restart
```

You can check if your installation of Docker works as expected by running the following command below. It will pull and run the hello-world image from Docker hub. If it works you're good to go.

```bash
docker run hello-world
```

## Useful commands

List pulled and created images
```bash
docker images
```

Check active containers
```bash
docker container ls
```

Build image.

```bash
docker build ./ -t image_name
```

Run container based on image

```bash
docker run 
```


### Next

checkout branch workshop/1_node to proceed