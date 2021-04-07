import logo from "./logo.svg";
import mainPhoto from "./mainPhoto.png";
import jumi from "./jumi.png";
import "./App.css";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fefdfd",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          width: "100vw",
        }}
      >
        <img src={logo} />
        <img src={mainPhoto} style={{ width: "100vw" }} />
      </div>
      <div className="About">
        <img src={jumi} className="Halfpage" />
        <div className="Halfpage">
          <h1>about</h1>
          <p>
            Lectus eget faucibus tristique convallis. Sit enim nunc quis eget.
            Euismod egestas gravida sed sed. Mauris fermentum sit et est,
            tristique. Non diam mattis lacinia vitae a. Duis tristique etiam
            suspendisse erat cursus malesuada convallis elit enim. Risus nulla
            nec condimentum venenatis.
          </p>
          <p>
            Tortor blandit sagittis augue vitae nullam pellentesque. In urna in
            netus mauris velit molestie pellentesque auctor tortor. Morbi
            pellentesque vitae quis vitae enim, viverra. Leo quis id ullamcorper
            nunc commodo varius blandit erat. Urna velit arcu tempus nunc at.
            Justo, ornare tortor quis ac tristique enim et. Ligula duis amet,
            sed purus, morbi ut viverra quis feugiat. Pellentesque cursus odio
            et egestas sit suspendisse nunc.
          </p>
          <p>
            Id nunc nulla sed maecenas sed. Bibendum augue tempor sit iaculis
            leo mauris viverra commodo. Risus enim nulla nisl arcu curabitur
            integer ut. Semper habitant erat ultrices vel fringilla cursus. Vel
            venenatis tortor tempor, gravida non. Quis ac blandit vivamus etiam
            faucibus et vitae. Egestas nibh ut felis quam massa id amet
            condimentum. Integer sagittis turpis egestas ut purus consequat
            massa sed nec. Pulvinar duis in placerat varius neque, viverra
            ultricies. Facilisis purus dictum eu sem.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
