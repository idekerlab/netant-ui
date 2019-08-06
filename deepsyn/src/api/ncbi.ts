const BASE_URL: string =
  'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&retmode=xml&id='

const fetchPublicationSummary = (pmid: string) => {
  const fetchUrl: string = BASE_URL + pmid

  return fetch(fetchUrl)
    .then(response => {
      return response.text()
    })
    .then(text => {
      const parser = new DOMParser()
      const xmlDoc = parser.parseFromString(text, 'text/xml')
      const article = xmlDoc.getElementsByTagName('Article')
      const entry = article[0]

      return convertArticle(entry)
    })
}

enum Tags {
  ArticleTitle,
  Abstract,
  Author,
  Journal,
}

const convertArticle = article => {
  const abstract = article.getElementsByTagName(Tags.Abstract)[0].textContent
  const title = article.getElementsByTagName(Tags.ArticleTitle)[0].textContent
  const authors = article.getElementsByTagName(Tags.Author)
  const journal = article.getElementsByTagName(Tags.Journal)
  const journalObj = {}
  for (let j of journal[0].children) {
    journalObj[j.nodeName] = j.textContent
  }

  const authorList: object[] = []

  for (let auth of authors) {
    const author = {}
    for (let entry of auth.children) {
      author[entry.nodeName] = entry.textContent
    }
    authorList.push(author)
  }

  return {
    title,
    abstract,
    authors: authorList,
    journal: journalObj,
  }
}


export { fetchPublicationSummary }
