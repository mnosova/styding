//для подключения каких либо скриптов в DOM
const onDomLoaded = function() {
  return new Promise((resolve) => {
    if (document.readyState === 'interactive' || document.readyState === 'complete') {
      resolve();
    } else {
      document.addEventListener('DOMContentLoaded', () => {
        resolve();
      }, {
        capture: true,
        once: true,
        passive: true
      });
    }
  });
};

const domHelper = {
  onDomLoaded
};

export default domHelper;

//usage


const scripts = [
  {
    src: '/static/widgetCallback.js',
    callback: () => {
      //do smth
    }
  },
  {src: '/worker.js'}
];
const container = document.querySelector('#asyncScripts') || document.body;

domHelper.onDomLoaded().then(() => {
  scripts.forEach((script) => {
    if (!script.src) {
      return;
    }
    const element = document.createElement('script');
    element.src = script.src;
    if (!document.querySelector(`[src="${script.src}"]`)) {
      container.appendChild(element);
    }
    element.onload = () => {
      if (typeof script.callback === 'function') {
        script.callback();
      }
    };
  });
});

