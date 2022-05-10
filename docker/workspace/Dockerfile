FROM node:gallium-bullseye

RUN apt update && apt install -y \
  jq

RUN curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" \
  && unzip awscliv2.zip \
  && rm awscliv2.zip \
  && ./aws/install \
  && rm -r ./aws \
&& curl -L -o direnv https://github.com/direnv/direnv/releases/download/v2.29.0/direnv.linux-amd64 \
  && chmod +x direnv \
  && mv direnv /usr/local/bin/ \
  && echo 'eval "$(direnv hook bash)"' >> /root/.bashrc

WORKDIR /work/ts-next-sample
