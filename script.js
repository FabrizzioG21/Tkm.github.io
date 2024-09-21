let isDay = false;
const containerHeaven = document.getElementById('containerHeaven');
const leaves = document.querySelectorAll('.flower__leaf');
const leaves4 = document.querySelectorAll('.flower__leaf--4');
const leavesCircle = document.querySelectorAll(`[id="flowerCircle"]`);
const textLove = document.getElementById('textLove');

function toggleDayNight() {
  if (!isDay) {
    containerHeaven.classList.remove('sunset');
    containerHeaven.classList.add('night');
  } else {
    containerHeaven.classList.remove('night');
    containerHeaven.classList.add('sunset');
  }
  leaves.forEach(leaf => {
    let gradientColors = isDay ? 'e6f331' : '#e6f331'; // color de las hojas de las flores
    leaf.style.backgroundImage = `linear-gradient(to top, ${gradientColors}, ${gradientColors})`;
  });
  leaves4.forEach(leaf => {
    let gradientColors = isDay ? 'e6f331' : '#e6f331'; // color de las hojas de las flores
    leaf.style.backgroundImage = `linear-gradient(to top, ${gradientColors}, ${gradientColors})`;
  });
  leavesCircle.forEach(leaf => {
    let gradientColors = isDay ? '255, 235, 18' : '255, 235, 18'; // color del centro de la flor (los colores deben ser en rgb)
    let borderCircle = isDay ? '##fff' : '#fff'; // color del centro externo de la flor
    leaf.style.backgroundColor = borderCircle;
    changeSpecificAfterStyle(leaf, 'background-image', `repeating-linear-gradient(135deg,
      rgba(0, 0, 0, 0.03) 0px,
      rgba(0, 0, 0, 0.03) 1px,
      transparent 1px,
      transparent 12px),
    repeating-linear-gradient(45deg,
      rgba(0, 0, 0, 0.03) 0px,
      rgba(0, 0, 0, 0.03) 1px,
      transparent 1px,
      transparent 12px),
    repeating-linear-gradient(67.5deg,
      rgba(0, 0, 0, 0.03) 0px,
      rgba(0, 0, 0, 0.03) 1px,
      transparent 1px,
      transparent 12px),
    repeating-linear-gradient(135deg,
      rgba(0, 0, 0, 0.03) 0px,
      rgba(0, 0, 0, 0.03) 1px,
      transparent 1px,
      transparent 12px),
    repeating-linear-gradient(45deg,
      rgba(0, 0, 0, 0.03) 0px,
      rgba(0, 0, 0, 0.03) 1px,
      transparent 1px,
      transparent 12px),
    repeating-linear-gradient(112.5deg,
      rgba(0, 0, 0, 0.03) 0px,
      rgba(0, 0, 0, 0.03) 1px,
      transparent 1px,
      transparent 12px),
    repeating-linear-gradient(112.5deg,
      rgba(0, 0, 0, 0.03) 0px,
      rgba(0, 0, 0, 0.03) 1px,
      transparent 1px,
      transparent 12px),
    repeating-linear-gradient(45deg,
      rgba(0, 0, 0, 0.03) 0px,
      rgba(0, 0, 0, 0.03) 1px,
      transparent 1px,
      transparent 12px),
    repeating-linear-gradient(22.5deg,
      rgba(0, 0, 0, 0.03) 0px,
      rgba(0, 0, 0, 0.03) 1px,
      transparent 1px,
      transparent 12px),
    repeating-linear-gradient(45deg,
      rgba(0, 0, 0, 0.03) 0px,
      rgba(0, 0, 0, 0.03) 1px,
      transparent 1px,
      transparent 12px),
    repeating-linear-gradient(22.5deg,
      rgba(0, 0, 0, 0.03) 0px,
      rgba(0, 0, 0, 0.03) 1px,
      transparent 1px,
      transparent 12px),
    repeating-linear-gradient(135deg,
      rgba(0, 0, 0, 0.03) 0px,
      rgba(0, 0, 0, 0.03) 1px,
      transparent 1px,
      transparent 12px),
    repeating-linear-gradient(157.5deg,
      rgba(0, 0, 0, 0.03) 0px,
      rgba(0, 0, 0, 0.03) 1px,
      transparent 1px,
      transparent 12px),
    repeating-linear-gradient(67.5deg,
      rgba(0, 0, 0, 0.03) 0px,
      rgba(0, 0, 0, 0.03) 1px,
      transparent 1px,
      transparent 12px),
    repeating-linear-gradient(67.5deg,
      rgba(0, 0, 0, 0.03) 0px,
      rgba(0, 0, 0, 0.03) 1px,
      transparent 1px,
      transparent 12px),
    linear-gradient(90deg, rgb(${gradientColors}), rgb(${gradientColors}))`);
  });
  isDay = !isDay;
}


function changeSpecificAfterStyle(element, property, value) {
  // Asegurarse de que el elemento tenga un identificador único
  if (!element.id) {
    element.id = 'pseudo-element-' + Math.random().toString(36).substr(2, 9);
  }

  // Crear o obtener la etiqueta de estilo dinámica
  let styleTag = document.getElementById('dynamic-styles');
  if (!styleTag) {
    styleTag = document.createElement('style');
    styleTag.id = 'dynamic-styles';
    document.head.appendChild(styleTag);
  }

  // Verificar si la regla de estilo ya existe
  let existingRule = Array.from(styleTag.sheet?.cssRules || []).find(rule => rule.selectorText === `#${element.id}::after`);
  
  // Crear la nueva regla de estilo si no existe
  if (!existingRule) {
    let css = `#${element.id}::after { ${property}: ${value} !important; }`;

    // Añadir la nueva regla al styleTag
    styleTag.sheet?.insertRule(css, styleTag.sheet.cssRules.length);
  } else {
    // Actualizar la propiedad si la regla ya existe
    existingRule.style[property] = value;
  }
}

function esperar(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  await esperar(11000); //tiempo de mensaje  
  textLove.classList.add('fadeTextOut');
  document.body.classList.remove("container");
  setInterval(toggleDayNight, 5000);
}

main();
