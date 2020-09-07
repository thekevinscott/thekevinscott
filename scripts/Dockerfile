FROM ubuntu:20.04

ARG USER_ID
ARG GROUP_ID

RUN apt-get update && \
    apt-get install -y \
    curl \
    git \
    openssh-client \
    rsync

ENV VERSION 0.74.3

RUN mkdir -p /usr/local/src \
    && cd /usr/local/src \
    && curl -L https://github.com/gohugoio/hugo/releases/download/v${VERSION}/hugo_${VERSION}_linux-64bit.tar.gz | tar -xz \
    && mv hugo /usr/local/bin/hugo \
    && curl -L https://bin.equinox.io/c/dhgbqpS8Bvy/minify-stable-linux-amd64.tgz | tar -xz \
    && mv minify /usr/local/bin/
# RUN addgroup 1000 hugo
# RUN adduser -SG hugo -u 1000 -h /src hugo
# RUN groupadd -g ${GROUP_ID} hugo && \
#     useradd -l -u ${USER_ID} -g hugo hugo && \
#     chown --changes --silent --no-dereference --recursive \
#           --from=0:0 ${USER_ID}:${GROUP_ID} /src

WORKDIR /src

EXPOSE 1313
