# Tp-client (tp-client)

Trabajo practico de desarrollo móvil híbrido. A grandes rasgos consiste en una aplicación de chat que sirve como cliente del [TP de técnicas avanzadas de programación](https://github.com/Luisfc68/tp-tap). Este trabajo [está deployado en AWS](http://tp-dmh.s3-website-us-east-1.amazonaws.com) y puede ser usado siempre y cuando el servidor esté corriendo.

Es una aplicacion de salas de chat donde el usuario puede entrar y crear salas (dependiendo de su tipo de plan). También puede entrar a salas de otros usuarios y conversar con ellos, luego al abandonar la sala tiene la opción de borrar todos los mensajes que tiene en la misma. El usuario puede gestionar su perfil y las salas que crea.

Para levantar el proyecto en local, hay que levantar el servidor (revisar el repositorio del servidor donde se documenta como levantarlo) y luego cambiar la url en [este archivo](/src/boot/axios.js) y en [este archivo](/src/boot/socketio.js) para apuntar a localhost. Luego con el servidor corriendo ejecutar `quasar dev` y listo.
