## Comandos para criação do App Mobile

1. npx create-expo-app *nome do app* --template
1. cd *nome do app*
1. code .
1. npx expo start (opcionalmente adicionar *--clear*)


## Estilização com StyleSheet nativo

1. utilize a lib *StyleSheet* do próprio 'reat-native'
1. insira logo abaixo do seu componente:
```typescript
  const styles = StyleSheet.create({
    
  });
```
Isso irá criar um estilo para ser aplicado em seu compoenete.
3. Adicione classes e/ou propriedades CSS ao seu estilo, conforme seu objetivo.
```typescript
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```
**Obs**: Note que as propriedades CSS devem ser escritas substituindo o '-' pela notação camelCase.