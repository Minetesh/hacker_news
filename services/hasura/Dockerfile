FROM hasura/graphql-engine:v1.0.0-beta.2
WORKDIR /usr/src/app
COPY . .
EXPOSE 8080
ENTRYPOINT ["/bin/sh", "-c", "/usr/src/app/entrypoint.sh"]
