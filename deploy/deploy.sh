#!/bin/sh

set -eux
URL="git@github.com:Talinka/Talinka.github.io.git"
ROOT=$(cd $(dirname "$0"); cd ..; pwd)

die() {
  echo "Error: $*"
  exit 1
}

[ -d "$ROOT/build" ] || die "directory build doesn't exist"

TEMPDIR="$ROOT/deploy/$(date '+%Y-%m-%d-%H-%M-%S')"
mkdir "$TEMPDIR"
git clone "$URL" "$TEMPDIR"
(cd "$TEMPDIR" && rm -rf *)
cp -r "$ROOT/build/"* "$TEMPDIR/"
cp "$ROOT/deploy/README.md" "$TEMPDIR/"
(cd "$TEMPDIR"; git add --all; git commit; git push)
rm -rf "$TEMPDIR"
echo "Successfully deployed"
