import React from 'react'


function Header(){
  return (
      <header className="header-container">
        <img src="../public/images/React.webp" alt="React Logo" width="100" />
        <nav className="nav-container">
          <ul className="nav-list">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
  )
}

function MainContent(){
  return (
    <main>
        <h1>This is a cool ass page</h1>

        <ul>
          <li>Great for front-end development</li>
          <li>Great for back-end development</li>
          <li>Great for full-stack development</li>
          <li>Great for mobile development</li>
          <li>Great for desktop development</li>
        </ul>
      </main>
  )
}

function Footer(){
  return (
    <footer><small>© 20xx Alexandru development. All rights reserved.</small></footer>
  )
}

function App() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  )
}

export default App


/**
Challenge: 

Part 2: 
- Add a `<header>` element with an `<img />` element with the image of the 
  React logo inside (src="react-logo.png") and make sure to set the 
  width to something more manageable so it doesn't take up the whole screen.
  Also, as always, you should include some alt text on the image.
- Add an `<h1>` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list, then wrap
  the `<h1>` and `<ol>` inside a `<main>` element to keep our semantic
  structure flowing well.
- Add a `<footer>` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."
 */