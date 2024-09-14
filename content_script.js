chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'enableDrawing') {
      enableDrawing();
    } else if (message.action === 'enableHighlighting') {
      enableHighlighting();
    } else if (message.action === 'addNote') {
      addNote();
    } else if (message.action === 'saveAsImage') {
      saveAsImage();
    }
  });
  
  function enableDrawing() {
    const canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = 'absolute';
    canvas.style.top = 0;
    canvas.style.left = 0;
    canvas.style.zIndex = 9999;
  
    const ctx = canvas.getContext('2d');
    let drawing = false;
  
    canvas.addEventListener('mousedown', () => {
      drawing = true;
    });
  
    canvas.addEventListener('mouseup', () => {
      drawing = false;
    });
  
    canvas.addEventListener('mousemove', (e) => {
      if (drawing) {
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
      }
    });
  }
  
  function enableHighlighting() {
    const highlighter = document.createElement('div');
    highlighter.style.position = 'absolute';
    highlighter.style.width = '100px';
    highlighter.style.height = '100px';
    highlighter.style.backgroundColor = 'yellow';
    highlighter.style.zIndex = 9999;
  
    document.body.appendChild(highlighter);
    highlighter.addEventListener('mousedown', (e) => {
      highlighter.style.left = `${e.clientX}px`;
      highlighter.style.top = `${e.clientY}px`;
    });
  }
  
  function addNote() {
    const note = document.createElement('div');
    note.contentEditable = true;
    note.style.position = 'absolute';
    note.style.top = '100px';
    note.style.left = '100px';
    note.style.width = '200px';
    note.style.height = '150px';
    note.style.backgroundColor = 'rgba(255, 255, 255, 0)'; // Nền trong suốt
    note.style.border = '2px solid #ccc';
    note.style.padding = '10px';
    note.style.zIndex = 9999;
    note.style.cursor = 'move';
    note.innerHTML = '';
  
    let isDragging = false;
    let offsetX, offsetY;
  
    note.addEventListener('mousedown', (e) => {
      isDragging = true;
      offsetX = e.clientX - note.offsetLeft;
      offsetY = e.clientY - note.offsetTop;
    });
  
    document.addEventListener('mousemove', (e) => {
      if (isDragging) {
        note.style.left = `${e.clientX - offsetX}px`;
        note.style.top = `${e.clientY - offsetY}px`;
      }
    });
  
    document.addEventListener('mouseup', () => {
      isDragging = false;
    });
  
    document.body.appendChild(note);
  }
  
  function saveAsImage() {
    html2canvas(document.body).then((canvas) => {
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = 'screenshot.png';
      link.click();
    });
  }
  