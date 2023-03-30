async function result() {
    let inputValue = document.getElementById("inputText").value;
    let shortUrl = document.getElementById("paragraph");
    await fetch(`https://api.shrtco.de/v2/shorten?url=${inputValue}`)
      .then((response) => response.json())
      .then((json) => {
        shortUrl.innerText = `Your Short URL : ${json.result.full_short_link}`;
  
        document.getElementById("inputText").value = json.result.full_short_link;
      });
  }
  
  async function copyToClipboard() {
    let inputValue = document.getElementById("inputText").value;
    const copied = alert(`Copied to clipboard successfully `);
  }
