import _ from 'lodash';

function component() {
  let element = document.createElement('div');

  /** Lodash */
  element.innerHTML = _.join(['Yo', 'Webpack']);

  return element;
}

document.body.appendChild(component());

