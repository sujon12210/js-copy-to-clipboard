function copy(){
  const text = document.getElementById('text').value;
  navigator.clipboard.writeText(text);

  document.getElementById('msg').innerText =
    'Copied to clipboard!';
}
