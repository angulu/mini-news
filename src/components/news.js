/**
 * Foramts date
 * @param {string} date 
 * @returns {string}
 */
const formatDate = (date) => {
  let formattedDate = new Date(date);
  const day = formattedDate.getUTCDate();
  formattedDate = Intl.DateTimeFormat('en', { dateStyle: 'long', timeStyle: 'short' }).format(formattedDate);
  formattedDate = formattedDate.replace("at ", "");

  switch (day) {
    case 1:
      formattedDate = formattedDate.replace(`${day},`, `${day}st,`);
      break;
    case 2:
      formattedDate = formattedDate.replace(`${day},`, `${day}nd,`);
      break;
    case 3:
      formattedDate = formattedDate.replace(`${day},`, `${day}rd,`);
      break;
    default:
      formattedDate = formattedDate.replace(`${day},`, `${day}th,`);
      break;
  }
 
 return formattedDate.slice(0, -3) + formattedDate.slice(-2);
}

const News = ({newDetails}) => {
    return (
      <article>
      <header>
        <div className="avatar"></div>
        <h2>{newDetails.title}</h2>
      </header>
      <div>
          <span>{formatDate(newDetails.published_date)}</span>
          <span>{newDetails.author}</span>
          <span>{newDetails.rights}</span>
      </div>
      <p>{newDetails.summary}</p>
      </article>
    );
  }
  
  export default News;
  