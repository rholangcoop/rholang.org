---
title: Hello World Example
filepath: hello-world.rho
filetype: vue
order: 1
---

```javascript
new helloWorld in {
  contract helloWorld(message) = {
    stdout!(*message)
   } |
   helloWorld!("Hello, world!")
}

```
