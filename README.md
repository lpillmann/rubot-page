# rubot-page
Landing page for RUbot - the bot who tells you what's in the RU's menu.

## Instructions
To run this project, just clone it into a new folder and use `npm` to install dependencies. Next, perform your tests via `npm run serve` or generate distribution files using `npm run dist`.

```
$ git clone https://github.com/luipillmann/rubot-page.git
$ cd rubot-page
$ npm install
$ npm run serve
```
## Credits
This project is built using [react-webpack Yeoman generator](https://github.com/react-webpack-generators/generator-react-webpack).

Obs.:

Due to some bugs ([issue 233](https://github.com/react-webpack-generators/generator-react-webpack/issues/233) and [issue 236](https://github.com/react-webpack-generators/generator-react-webpack/issues/236)) I've customized some configs:

- **cfg**/
	- defaults.js
	- base.js
	- dist.js

Changes are related to output path (the likes of 'assets/' or '/assets/') which needs to be different in *dev* and *dist* environments.
