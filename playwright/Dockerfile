FROM liferay/node-runner:latest

COPY . /opt/liferay

ENV LIFERAY_NODE_RUNNER_START="npm run testAllHeadless"

USER root:root

RUN apt-get update
RUN apt-get upgrade --yes
RUN DEBIAN_FRONTEND=noninteractive TZ=Etc/UTC apt-get install --no-install-recommends --yes gnupg
RUN mkdir -p /etc/apt/keyrings
# RUN curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | gpg --no-tty --dearmor -o /etc/apt/keyrings/nodesource.gpg
RUN curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
RUN echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_16.x nodistro main" > /etc/apt/sources.list.d/nodesource.list
RUN apt-get update
RUN DEBIAN_FRONTEND=noninteractive TZ=Etc/UTC apt-get install --no-install-recommends --yes nodejs
RUN apt-get clean

USER liferay:liferay

RUN npm install