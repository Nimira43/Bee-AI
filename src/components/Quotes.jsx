const Quotes = () => {
  return (
    <div>
      <div className="container">
        <div className="quotes-app">
          <h1 className="app-heading logo">Quote Genie</h1>
          <i className="bx bxs-quote-alt-left left-quote"></i>
          <p className="quote-text">Being second is the first of the ones who lose</p>
          <p className="quote-author">Ayrton Senna</p>
          <i className="bx bxs-quote-alt-right right-quote"></i>
        </div>
        <div className="circles">
          <div className="circles-1"></div>
          <div className="circles-2"></div>
          <div className="circles-3"></div>
          <div className="circles-4"></div>
        </div>
        <div className="buttons">
          <button className="btn btn-new">New Quote</button>
          <button className="btn btn-new">Add to Favourites</button>
        </div>
      </div>
    </div>
  )
}

export default Quotes
