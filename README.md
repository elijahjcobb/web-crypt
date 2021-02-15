# web-crypt
This small web application is available at [https://crypto.elijahcobb.com](). It provides two simple functions: encrypting and decrypting.

It uses the [Web Crypto](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API) API and always keeps everything just in memory. It never sends anything two the server. Feel free to poke around the source code. There is not much!

## Crypto
This uses the `AES-CBC` encryption algorithm. It first generates a random `IV` and asks you for a password. It then generates a key from the password provided but first, it hashes the raw password you provide using `SHA-256` and uses that value so that the password is always the same length.

The `IV` and encrypted `Uint8Array` are concatenated and then presented. The value you get that is *"encrypted"* is just this concatenation.

Check out all the crypto in [crypto.ts](https://github.com/elijahjcobb/web-crypt/blob/master/src/crypto.ts). That file contains all the actual encryption handling. Everything else is just React components.

## Issues
Please feel free to let me know if there are any problems with this web app in the form of a Github Issue.

I built this on a lunch break on a random Monday and it was just created for fun. **USE AT YOUR OWN RISK**!
