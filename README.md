# Platzom

Platzom es un idioma inventado para el curso de js de platzi.

## Descripción del idioma

- Si la palabra termina en "ar" se le quita.
- Si la palabra comienza por "z" se le añade "pe" al final.
- Si la palabra traducida tiene 10 o más letras se debe partir por la mitad y unir con un guión.
- Si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devulve la misma palabra intercalando mayúsculas y minúsculas.

## Instalación

```
npm install kowa1ski-Platsom
```

## Curso

```
import platzom from 'platzom'

platzom('programar'); // program
platzom('zorro'); // zorrope
platzom('zarpar'); // zarppe
platzom('abecedario'); // abece-dario
platzom('sometemos'); // SoMeTeMoS
```

## Créditos
- kowa1ski

## Licencia

[MIT](https://opensource.org/licenses/MIT)
# kowa1ski-Platsom
