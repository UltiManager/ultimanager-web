#!/usr/bin/env sh

tempfile=$(mktemp)
echo "Created temporary file: ${tempfile}"
echo
echo
envsubst < /usr/share/nginx/html/index.html | tee "${tempfile}"
echo
echo
mv "${tempfile}" "/usr/share/nginx/html/index.html"
chmod 0644 "/usr/share/nginx/html/index.html"

echo "Moved '${tempfile}' to: /usr/share/nginx/html/index.html"
echo

echo "Launching NGINX..."
exec nginx -g "daemon off;"
