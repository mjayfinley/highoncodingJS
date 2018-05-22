let container = document.getElementById("container")

let head = document.head
let link = document.createElement("link")
link.type = "text/css"
link.rel = "stylesheet"
link.href = "styles.css"
head.appendChild(link)

let meta = document.createElement("meta")
meta.name = "viewport"
meta.content = "width=device-width, initial-scale=1"
head.appendChild(meta)

let navBar = document.createElement("div")
navBar.className = "navBar"
let websiteName = document.createElement("h1")
websiteName.className = "websiteName"
let homeLink = document.createElement("a")
homeLink.className = "homeLink"
let categoryLink = document.createElement("a")
categoryLink.className = "categoryLink"

let topStory = document.createElement("div")
topStory.className = "topStory"
let topStoryName = document.createElement("h2")
topStoryName.className = "topStoryName"
let topStoryContent = document.createElement("p")
topStoryContent.className = "topStoryContent"

let secondStory = document.createElement("div")
secondStory.className = "secondStory"
let secondStoryName = document.createElement("h2")
secondStoryName.className = "secondStoryName"
let secondStoryContent = document.createElement("p")
secondStoryContent.className = "secondStoryContent"
let secondStoryCommentsAndLikes = document.createElement("div")
secondStoryCommentsAndLikes.className = "secondStoryCommentsAndLikes"
let secondStoryComments = document.createElement("h3")
secondStoryComments.className = "secondStoryComments"
let secondStoryLikes = document.createElement("h3")
secondStoryLikes.className = "secondStoryLikes"

let thirdStory = document.createElement("div")
thirdStory.className = "thirdStory"
let thirdStoryName = document.createElement("h2")
thirdStoryName.className = "thirdStoryName"
let thirdStoryContent = document.createElement("p")
thirdStoryContent.className = "thirdStoryContent"
let thirdStoryCommentsAndLikes = document.createElement("div")
thirdStoryCommentsAndLikes.className = "thirdStoryCommentsAndLikes"
let thirdStoryComments = document.createElement("h3")
thirdStoryComments.className = "thirdStoryComments"
let thirdStoryLikes = document.createElement("h3")
thirdStoryLikes.className = "thirdStoryLikes"



container.appendChild(navBar)
navBar.appendChild(websiteName)
websiteName.innerHTML = "HighOnCoding"
navBar.appendChild(homeLink)
homeLink.innerHTML = "Home"
navBar.appendChild(categoryLink)
categoryLink.innerHTML = "Category"

container.appendChild(topStory)
topStory.appendChild(topStoryName)
topStoryName.innerHTML = "Curse of the Current Reviews"
topStory.appendChild(topStoryContent)
topStoryContent.innerHTML = "When you want to buy any application from the Apple iTunes store you have more choices than you can handle. Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. Their choice is dependent on three important factors: price, screenshot, and reviews."

container.appendChild(secondStory)
secondStory.appendChild(secondStoryName)
secondStoryName.innerHTML = "Hello WatchKit"
secondStory.appendChild(secondStoryContent)
secondStoryContent.innerHTML = "Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enable the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch."
container.appendChild(secondStoryCommentsAndLikes)
secondStoryCommentsAndLikes.appendChild(secondStoryComments)
secondStoryComments.innerHTML = "12 comments"
secondStoryCommentsAndLikes.appendChild(secondStoryLikes)
secondStoryLikes.innerHTML = "124 likes"

container.appendChild(thirdStory)
thirdStory.appendChild(thirdStoryName)
thirdStoryName.innerHTML = "Introduction to Swift"
thirdStory.appendChild(thirdStoryContent)
thirdStoryContent.innerHTML = "Swift is a modern programing language developed by Apple to create the generation of iOS and OSX applications. Swift is a fairly new language and still in development but it clearly reflects the intentions and the future direction. This article will revolve around the basic concepts in the Swift language and how you can get started."
container.appendChild(thirdStoryCommentsAndLikes)
thirdStoryCommentsAndLikes.appendChild(thirdStoryComments)
thirdStoryComments.innerHTML = "15 comments"
thirdStoryCommentsAndLikes.appendChild(thirdStoryLikes)
thirdStoryLikes.innerHTML = "45 likes"
