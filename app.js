async function loadWords() {
  const response = await fetch('./vocab_backup.json');
  const data = await response.json();

  let words = data.words;
  let bookmarks = new Set(data.bookmarks);

  console.log(words);
}

loadWords();
