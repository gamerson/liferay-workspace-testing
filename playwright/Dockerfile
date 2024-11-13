FROM liferay/node-runner:latest

USER root

ARG NODE_VERSION=20.12.2
ARG NODE_PACKAGE=node-v$NODE_VERSION-linux-x64
ARG NODE_HOME=/opt/$NODE_PACKAGE

ENV NODE_PATH="$NODE_HOME/lib/node_modules"
ENV PATH="$NODE_HOME/bin:$PATH"

RUN curl https://nodejs.org/dist/v$NODE_VERSION/$NODE_PACKAGE.tar.gz | tar -xzC /opt/

COPY package.json /opt/liferay
COPY playwright.config.ts /opt/liferay

RUN npm install

RUN npm run playwrightInstallWithDeps

COPY tests/ /opt/liferay/tests
COPY utils/ /opt/liferay/utils

ENV LIFERAY_NODE_RUNNER_START="npm run testAllDocker"
