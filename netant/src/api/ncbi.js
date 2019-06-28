const BASE_URL =
  'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&retmode=xml&id='

const PREFIX = 'Pubmed-entry ::= '

const fetchPublicationSummary = pmid => {
  const fetchUrl = BASE_URL + pmid

  return fetch(fetchUrl)
    .then(response => {
      return response.text()
    })
    .then(text => {
      const parser = new DOMParser()
      const xmlDoc = parser.parseFromString(text, 'text/xml')

      console.log('TEXT1===', xmlDoc)
      const article = xmlDoc.getElementsByTagName('Article')
      const entry = article[0]

      return convertArticle(entry)
    })
}

const TAGS = {
  ArticleTitle: 'ArticleTitle',
  Abstract: 'Abstract',
  Author: 'Author',
  Journal: 'Journal'
}

const convertArticle = article => {
  const abstract = article.getElementsByTagName(TAGS.Abstract)[0].textContent
  const title = article.getElementsByTagName(TAGS.ArticleTitle)[0].textContent
  const authors = article.getElementsByTagName(TAGS.Author)
  const journal = article.getElementsByTagName(TAGS.Journal)

  console.log(journal)
  const journalObj = {}
  for (let j of journal[0].children) {
    journalObj[j.nodeName] = j.textContent
  }

  const authorList = []

  for (let auth of authors) {
    console.log(auth.children)
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
    journal: journalObj
  }
}

const parseTree = (node, obj) => {
  const children = node.children
  if(children.length === 0) {

  } else {
    for(let child of children) {
    }
  }

}

export { fetchPublicationSummary }
