#!/bin/bash

#
# NodeJSインストール用シェル
# - NVM(Node Version Manager)で指定されたバージョンをインストール
#

NVM_VERSION='v0.33.6'
NODE_VERSION='v9.2.0'
BASH_PROFILE_PATH=${HOME}/.bash_profile

# NVMインストール
curl --silent -o- https://raw.githubusercontent.com/creationix/nvm/"$NVM_VERSION"/install.sh | bash

if [ -f "$BASH_PROFILE_PATH" ]; then
    . "$BASH_PROFILE_PATH"
else
    . "$HOME"/.bashrc
fi

# NodeJSインストール
nvm install "$NODE_VERSION"