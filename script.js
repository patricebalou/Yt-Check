async function checkMonetization() {
  const url = document.getElementById('channelURL').value;
  const resultDiv = document.getElementById('result');

  if (!url.includes("youtube.com")) {
    resultDiv.innerText = "Bitte eine gültige YouTube-URL eingeben.";
    return;
  }

  resultDiv.innerText = "Überprüfung läuft...";

  try {
    const response = await fetch(`https://noembed.com/embed?url=${url}`);
    const data = await response.json();

    if (data && data.author_name) {
      resultDiv.innerHTML = `Kanal <strong>${data.author_name}</strong> gefunden. <br> 
      <em>Hinweis:</em> Echte Anzeige-Erkennung kommt später (dies prüft aktuell nur Metadaten).`;
    } else {
      resultDiv.innerText = "Kanal nicht gefunden.";
    }
  } catch (error) {
    resultDiv.innerText = "Fehler bei der Überprüfung.";
  }
}
