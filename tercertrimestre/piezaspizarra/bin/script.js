const colores = ['white', 'yellow', 'green', 'red', 'blue'];

function crearFigura(form, color = 'white') {
  const figura = document.createElement('div');
  figura.classList.add('figura');
  figura.dataset.forma = form;
  figura.dataset.colorIndex = colores.indexOf(color);
  figura.dataset.id = 'fig-' + Date.now() + '-' + Math.random();
  figura.draggable = true;

  if (form === 'cuadrado') {
    figura.style.border = '2px solid black';
    figura.style.backgroundColor = color;
  } else if (form === 'circulo') {
    figura.style.border = '2px solid black';
    figura.style.borderRadius = '50%';
    figura.style.backgroundColor = color;
  } else if (form === 'triangulo') {
    figura.innerHTML = `
      <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
        <polygon points="50,10 10,95 90,95" fill="${color}" stroke="black" stroke-width="4"/>
      </svg>
    `;
  }

  figura.addEventListener('click', (e) => {
    e.stopPropagation();
    cambiarColor(figura);
    actualizarTabla();
  });

  figura.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    figura.remove();
    actualizarTabla();
  });

  figura.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', JSON.stringify({
      forma: figura.dataset.forma,
      colorIndex: figura.dataset.colorIndex,
      id: figura.dataset.id,
      interno: true
    }));
  });

  return figura;
}

function cambiarColor(elem) {
  let idx = parseInt(elem.dataset.colorIndex);
  idx = (idx + 1) % colores.length;
  elem.dataset.colorIndex = idx;
  actualizarColor(elem);
}

function actualizarColor(elem) {
  const color = colores[elem.dataset.colorIndex];
  const forma = elem.dataset.forma;

  if (forma === 'triangulo') {
    const svg = elem.querySelector('svg polygon');
    if (svg) svg.setAttribute('fill', color);
  } else {
    elem.style.backgroundColor = color;
  }
}

function actualizarTabla() {
  const conteo = {
    cuadrado: [0, 0, 0, 0, 0],
    circulo: [0, 0, 0, 0, 0],
    triangulo: [0, 0, 0, 0, 0],
  };

  document.querySelectorAll('#zona-dibujo .figura').forEach(f => {
    const forma = f.dataset.forma;
    const colorIdx = parseInt(f.dataset.colorIndex);
    conteo[forma][colorIdx]++;
  });

  const filas = document.querySelectorAll('#tabla-conteo tbody tr');
  ['cuadrado', 'circulo', 'triangulo'].forEach((forma, i) => {
    for (let j = 0; j < 5; j++) {
      filas[i].children[j + 1].textContent = conteo[forma][j];
    }
  });
}

window.addEventListener('DOMContentLoaded', () => {
  const zona = document.getElementById('zona-dibujo');
  const figurasContenedor = document.getElementById('figuras');
  const formas = ['cuadrado', 'circulo', 'triangulo'];

  formas.forEach(forma => {
    const fig = crearFigura(forma, 'white');
    fig.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('text/plain', JSON.stringify({
        forma: fig.dataset.forma,
        colorIndex: fig.dataset.colorIndex,
        interno: false
      }));
    });
    figurasContenedor.appendChild(fig);
  });

  zona.addEventListener('dragover', (e) => e.preventDefault());

  zona.addEventListener('drop', (e) => {
    e.preventDefault();
    const datos = JSON.parse(e.dataTransfer.getData('text/plain'));

    let x = e.offsetX - 25;
    let y = e.offsetY - 25;
    x = Math.max(0, Math.min(x, zona.clientWidth - 50));
    y = Math.max(0, Math.min(y, zona.clientHeight - 50));

    if (datos.interno) {
      const figura = zona.querySelector(`[data-id="${datos.id}"]`);
      if (figura) {
        figura.style.left = `${x}px`;
        figura.style.top = `${y}px`;
      }
    } else {
      const nueva = crearFigura(datos.forma, colores[datos.colorIndex]);
      nueva.style.left = `${x}px`;
      nueva.style.top = `${y}px`;
      zona.appendChild(nueva);
      actualizarTabla();
    }
  });
});

