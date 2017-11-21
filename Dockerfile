FROM ruby:2.2

## Instalando dependencias
RUN apt-get update && \
    apt-get install -y \
			mysql-client

## Instalando node
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
RUN apt-get install -y nodejs

## Copiando projeto
COPY ./ /app
WORKDIR /app

## Instalando dependências do ruby
RUN bundle install

## Instalando dependências do node
RUN npm install -g bower grunt-cli && \
    npm install && \
    grunt bower

## Variaveis de ambiente
ENV RAILS_ENV=development

## Compilando assets
RUN bundle exec rake assets:precompile

## Iniciar aplicação
EXPOSE 3000
ENTRYPOINT bundle exec rake db:migrate && bundle exec rails s --bind 0.0.0.0
