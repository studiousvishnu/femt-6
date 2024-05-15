import "./App.css";
import redLogo from './assets/images/icon-reaction.svg'
import yellowLogo from './assets/images/icon-memory.svg'
import blueLogo from './assets/images/icon-visual.svg'
import greenLogo from './assets/images/icon-verbal.svg'


function App() {
  return (
    <>
     <div className="main-container mx-auto">
     <div className="container mx-auto  my-5">
        <div className="row ">
        <div className="col-lg-2"></div>

          <div className="left-container  col-lg-3 text-white pt-4 rounded-5">
            <div className="heading text-center pb-2">
              <h5 className="fw-bold" style={{ color: "#aa9bf7" }}>
                Your Results
              </h5>
            </div>{" "}
            <div className="circle text-center d-flex justify-content-center py-2 pb-3 ">
              <div
                className="shape rounded-circle mx-5  text-white d-flex flex-column  justify-content-center"
                style={{ height: "150px", width: "150px" }}
              >
                <h1 className="">76</h1>
                <div> of 100</div>
              </div>
            </div>
            <div className="content text-center">
              <h2>Great</h2>
              <p className="px-5">
                You scored higher than 65% of the people who have taken these
                tests.
              </p>
            </div>
          </div>
          <div className="right-container col-lg-4 my-4 ms-lg-4">
            <h5 className="fw-bold text-center text-lg-start mb-3">Summary</h5>

            <div className="toast-msg ">
              <div className="container">
              <div className="row gy-3">
              <div className="red d-flex bg-danger-subtle  rounded-2 p-3">
                <div className="col-md-2">
                  <img src={redLogo} alt="" />
                </div>
                <div className="col-md-7 fw-bold text-danger ">Reaction</div>
                <div className="col-md-3"><span className='fw-bold'>80</span>/100</div>
              </div>
              <div className="red d-flex bg-warning-subtle  rounded-2 p-3">
                <div className="col-md-2">
                  <img src={yellowLogo} alt="" />
                </div>
                <div className="col-md-7 fw-bold text-warning ">Memory</div>
                <div className="col-md-3"><span className='fw-bold'>92</span>/100</div>
              </div>
              <div className="red d-flex bg-success-subtle  rounded-2 p-3">
                <div className="col-md-2">
                  <img src={greenLogo} alt="" />
                </div>
                <div className="col-md-7 fw-bold text-success">Verbal</div>
                <div className="col-md-3"><span className='fw-bold'>61</span>/100</div>
              </div>
              <div className="red d-flex bg-primary-subtle text-  rounded-2 p-3">
                <div className="col-md-2">
                  <img src={blueLogo} alt="" />
                </div>
                <div className="col-md-7 fw-bold text-primary ">Visual</div>
                <div className="col-md-3"><span className='fw-bold'>72</span>/100</div>
              </div>
              <div className="button">
                <button className='btn rounded-pill bg-black text-white w-100 py-3 mb-5'>Continue</button>
              </div>
              </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
     </div>
    </>
  );
}

export default App;
