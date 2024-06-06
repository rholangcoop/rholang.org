# Use an official Node.js runtime as a parent image
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-14

# Install Node.js 14 and npm
RUN curl -fsSL https://deb.nodesource.com/setup_14.x | bash - \
    && apt-get install -y nodejs

# Install Python 2 and other dependencies
RUN apt-get update && apt-get install -y \
    python2 \
    python2-dev \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Manually install pip for Python 2
RUN curl https://bootstrap.pypa.io/pip/2.7/get-pip.py --output get-pip.py \
    && python2 get-pip.py \
    && rm get-pip.py

# Set up Python 2 as 'python' command
RUN ln -s /usr/bin/python2 /usr/bin/python

# Upgrade pip for Python 2
RUN python2 -m pip install --upgrade pip

# Switch back to dialog for RUN instructions to run as non-root
ENV DEBIAN_FRONTEND=dialog
