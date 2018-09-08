let testScafold = {
    title: "Mastodon",
    textList: [
           `As a mammoth, 
           like the ones that were being dug out in Siberia. 
           Anatomists noted that the teeth of mammoth and elephants were 
           different from those of the incognitum, 
           which possessed rows of large conical cusps, 
           indicating that they were dealing with a distinct species. 
           In 1806 the French anatomist Georges`,
           `
           I LIke potatos
           `  
           ]
}




class Engine {
    
    constructor(route, parentTag) {
        this.scafold   = testScafold
        this.parentTag = parentTag
    }
    
    titleAsHtml() {
        var titleTag = document.createElement('h1')
        title.textContent = this.scafold.title
        return titleTag
    }    

    textAsHtml() {
        return this.scafold.textList.map(element => {
            let title = document.createElement('li')
            title.textContent = element
            return title
        })
    }

}