export function Welcome() {
  return (
    <>
      <header className="bg-black">
        {/* container */}
        <div className="w-full max-w-362.5 mx-auto h-25.5 flex items-center justify-between">
          <div>
            <img
              src="https://assets.nicepagecdn.com/d2cc3eaa/6401142/images/logo-header.png"
              className="w-32.5"
            />
          </div>
          <nav>
            <ul className="uppercase text-white flex gap-4">
              <li>
                <a className="underline underline-primary text-primary underline-offset-6">
                  home
                </a>
              </li>
              <li>
                <a>About Us</a>
              </li>
              <li>
                <a>pages</a>
              </li>
              <li>
                <a>contact</a>
              </li>
            </ul>
          </nav>
          <a className="py-2.5 px-7.5 text-white bg-primary font-bold">
            Book an appointment
          </a>
        </div>
      </header>
      <main>
        {/* Hero-Section */}
        <section className="hero_section flex text-white">
          <div className="h-full basis-full flex flex-col items-center justify-center pl-20">
            <div className="flex flex-col gap-11.25">
              <h1 className="text-8xl font-bold">YOUR STYLE STARTS HERE</h1>
              <div className="text-2xl">
                <p>We build our passion for the art of barbering through</p>
                <p>our commitment to our customers.</p>
              </div>
              <div>
                <a className="py-4.5 px-10.5 text-white bg-primary font-bold">
                  Book an appointment
                </a>
              </div>
              <p>
                Image from <a href="#">Freepik</a>
              </p>
            </div>
          </div>
          <div className="h-full basis-full"></div>
        </section>
        <section>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </section>
      </main>
      <footer></footer>
    </>
  );
}
