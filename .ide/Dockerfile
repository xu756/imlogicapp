FROM node:18.18.1
# install vscode and extension
RUN npm install -g pnpm
RUN git config --global user.name "xu756"
RUN git config --global user.email "756334744@qq.com"
RUN curl -fsSL https://code-server.dev/install.sh | sh &&\
    code-server --install-extension redhat.vscode-yaml &&\
    code-server --install-extension MS-CEINTL.vscode-language-pack-zh-hans &&\
    code-server --install-extension rvest.vs-code-prettier-eslint &&\
    echo done \
RUN ls
# 指定字符集支持命令行输入中文（根据需要选择字符集）
ENV LANG C.UTF-8
ENV LANGUAGE C.UTF-8