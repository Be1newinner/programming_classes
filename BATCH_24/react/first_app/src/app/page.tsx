// import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <div className="card">
        <div className="cardBody">
          <div>
            <input />
            <div>
              <img src="https://www.svgrepo.com/download/522443/search.svg" alt="Search" height={28} width={28} />
            </div>
          </div>
          <div>
            <img src={"/images/cloudy.png"} alt="sunny" />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
