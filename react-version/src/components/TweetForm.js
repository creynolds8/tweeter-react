function TweetForm () {
  const formText = "What are you humming about?";
  const handleClick = (event) => {
    event.preventDefault();
    console.log('input: event prevented');
  }

  return (
    <section className="newtweet">
      <form method="post" action="/tweets" className="newtweet__form">
        <textarea
          className="form__textarea"
          name="text"
          placeholder={formText}
        ></textarea>
        <input onClick={handleClick} type="submit" value="Tweet" className="form__input" />
        <span className="form__counter">140</span>
      </form>
    </section>
  ); 
}

export default TweetForm;