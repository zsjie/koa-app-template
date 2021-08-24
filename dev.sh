# replace absolute path to relative path
tscpaths -p tsconfig.json -s ./src -o ./dist >> /dev/null

# start service
node -r source-map-support/register ./dist
