#!/bin/sh

ls | grep .git | xargs -I{} git --git-dir={} gc
