import image from "../assets/news.jpg";
export const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
      style={{ maxWidth: "380px", width: "100%" }}
    >
      <img
        src={src ? src : image}
        style={{ height: "200px", width: "100%", objectFit: "cover" }}
        className="card-img-top"
        alt="News Image"
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">
          {description
            ? description.slice(0, 90)
            : "News indicate to current event. It is information about something that has just happened"}
        </p>
        <a href={url} className="btn btn-info">
          Read More
        </a>
      </div>
    </div>
  );
};
