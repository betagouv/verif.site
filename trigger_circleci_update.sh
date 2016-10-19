#!/bin/bash

_circle_token=$1

trigger_build_url=https://circleci.com/api/v1/project/sgmap/verif.site/tree/master?circle-token=${_circle_token}

post_data=$(cat <<EOF
{
  "build_parameters": {
    "RUN_UPDATE": "true",
  }
}
EOF)

curl \
--header "Accept: application/json" \
--header "Content-Type: application/json" \
--data "${post_data}" \
--request POST ${trigger_build_url}
