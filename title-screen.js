const CFonts = require('cfonts');
const chalk = require('chalk');

function titleScreen() {
  CFonts.say('Pixel Pusher!', {
    font: 'block',
    align: 'center',
    colors: [],
    background: 'transparent',
    letterSpacing: 2,
    lineHeight: 1,
    space: true,
    maxLength: '0',
    gradient: ['#F88379', '#9867c5'],
    independentGradient: false,
    transitionGradient: false,
    env: 'node',
  });

  CFonts.say('By st-ART-up', {
    font: 'tiny',
    align: 'center',
    colors: ['#FFC476'],
    background: 'transparent',
    letterSpacing: 2,
    lineHeight: 1,
    space: true,
    maxLength: '0',
    independentGradient: false,
    transitionGradient: false,
    env: 'node',
  });

  console.log(
    chalk.blueBright(
      '・・・・・・・・・・・・・・・・・・・・    Katrina - Brandon - Kat - Vance - Nicole - Erich - Soraya - Steph     ・・・・・・・・・・・・・・・・・・・・ \n\n'
    )
  );

  let i = 0;
  const goStop = setInterval(function () {
    console.log('🌈');
    console.log('   ❤️');
    console.log('      🧡');
    console.log('         💛');
    console.log('            💚');
    console.log('               💙');
    console.log('                  💜');

    i++;
    if (i >= 6) {
      clearInterval(goStop);
    }
  }, 800);
}

return titleScreen();
