//CANVAS - CHILDREN: if you want to have a transparent screen on top of canvas for text, alternatively you can make canvas transparent, and keep this text container as the "background" canvas as a PARENT to canvas
// const textContainer = blessed.box({
//   parent: canvas,
//   top: 0,
//   left: 0,
//   height: '98%-1',
//   width: '99%',
//   keys: true,
//   mouse: true,
//   // transparent: true,
//   alwaysScroll: true,
//   scrollable: true,
//   scrollbar: {
//     ch: 'o',
//     bg: 183
//   },
//   style: {
//     fg: 57,
//     bg: 255,
//     transparent: true
//   }
// })