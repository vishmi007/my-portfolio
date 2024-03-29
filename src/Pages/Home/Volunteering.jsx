// Inside your Volunteering component
import data from "../../data/index.json";

export default function Volunteering() {
  return (
    <section className="volunteering--section" id="volunteering">
      <div className="portfolio--container-box"> 
        <div className="portfolio--container">
          <p className="sub--title">Volunteering  & Sports</p>
          <h2 className="sections--heading"> A great Team Player</h2>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.volunteering?.map((item, index) => (
          <div key={index} className="volunteering--section--card">
              <img src={process.env.PUBLIC_URL + item.src} alt="Volunteering Image" className="volunteering--section--card--image"/>
            <p className="text-md">{item.description}</p>
            {item.learnings && (
              <ul className="text-md">
                {item.learnings.map((learning, idx) => (
                  <li key={idx} className="text-md">{learning}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
