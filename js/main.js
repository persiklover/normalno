var api_key = 'Y02GI6RLWc8etyuNmbSC7o5Xvconpgjf';
var tag = 'minecraft'
  .trim()
  .toLowerCase()
  .split(/[\s]+/g)
  .join('+');
fetch(`http://api.giphy.com/v1/gifs/random?tag=${tag}&api_key=${api_key}`)
  .then(res => res.json())
  .then(json => {
    console.log(json);
    document.getElementById('cat').src = json.data.images.original.url;
  })