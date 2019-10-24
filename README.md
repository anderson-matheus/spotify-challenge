# SPOTIFY CHALLENGE


## Instalando projeto

```
$ git clone https://github.com/anderson-matheus/spotify-challenge.git
$ cd spotify-challenge
$ npm installl
$ cp .env.example .env
```


## Configurando ENV

Para obter credenciais da api do spotify acesse o link:

[documentação da api do spotify](https://developer.spotify.com/web-api/endpoint-reference/)


```
SPOTIFY_ACCOUNT='https://accounts.spotify.com'
SPOTIFY_API='https://api.spotify.com/v1'
CLIENT_ID='CLIENT_ID'
CLIENT_SECRET='CLIENT_SECRET'
REDIRECT_URI='http://localhost:8080'
CORS_HEROKU='https://cors-anywhere.herokuapp.com'
APP_ENV='development'
BASE_NAME='/'
```

## Rodando projeto em dev

```
$ npm start
```

## Rodando projeto em prod

Para rodar o projeto em produção deve mudar no env a variável APP_ENV para production e alterar o BASE_NAME caso seja necessário

## Exemplo de configuração de env para produção

```
SPOTIFY_ACCOUNT='https://accounts.spotify.com'
SPOTIFY_API='https://api.spotify.com/v1'
CLIENT_ID='CLIENT_ID'
CLIENT_SECRET='CLIENT_SECRET'
REDIRECT_URI='http://localhost/spotify'
CORS_HEROKU='https://cors-anywhere.herokuapp.com'
APP_ENV='production'
BASE_NAME='/spotify'
```


```
$ npm run build
```
