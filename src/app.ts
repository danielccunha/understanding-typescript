const button = document.querySelector('button');

function clickHandler(message: string) {
  console.log('Clicked:', message);
}

// This comment will be ignored
button?.addEventListener('click', clickHandler.bind(null, 'Something'));
