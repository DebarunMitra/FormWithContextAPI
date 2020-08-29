import React, {useContext} from 'react';
import JoinWebinar from './JoinWebinar';
import LsIntegrationContext from '../Contexts/LsIntegrationContext';

const CompleteProfileForm = () =>{
  const {state, dispatch} = useContext(LsIntegrationContext);
  const submitProfileInfo = (e) => {
    e.preventDefault();
    document.getElementById("form-btn-2").disabled = true;
    document.getElementById("form-btn-2").value = "submitting...";
    document.getElementById("form-btn-2").style.opacity = 0.3;
    dispatch({
      type: "CompleteUserProfile",
      college: document.getElementById("pap-college").value,
      department: document.getElementById("pap-department").value,
      semester: document.getElementById("pap-currentsemester").value,
      interestedin: document.getElementById("pap-interestedin").value,
    });
  }
  return (
    <div id="pap-form-2" className="wrap">
      <p id="completeProcess" style={{ display: "none" }}>
        {state.successMsg}
      </p>
      <form
        id="step-2-form"
        onSubmit={(e) => submitProfileInfo(e)}
        style={{ display: state.lentry === "old" ? "none" : "block" }}
      >
        <h3 className="heading">Thank You!</h3>
        <div className="text1">
          And Congratulations! You have taken the first step towards your dream
          job.
        </div>
        <div className="text2">
          Could you quickly give us a few more details?
        </div>

        <label htmlFor="college">College</label>
        <input type="text" id="pap-college" name="college" />
        <label htmlFor="currentsemester">Current Semester:</label>
        <select id="pap-currentsemester">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
        </select>
        <label htmlFor="Department">Department:</label>
        <select name="Department" id="pap-department">
          <option value="Aeronautical / Aerospace">
            Aeronautical / Aerospace
          </option>
          <option value="Automobile">Automobile</option>
          <option value="Bio-Tech">Bio-Tech</option>
          <option value="Chemical">Chemical</option>
          <option value="Civil">Civil</option>
          <option value="Computer Science">Computer Science</option>
          <option value="E &amp;TC">E &amp;TC</option>
          <option value="ECE">ECE</option>
          <option value="EEE">EEE</option>
          <option value="Industrial / Production">
            Industrial / Production
          </option>
          <option value="Instrumentation">Instrumentation</option>
          <option value="IT / IS">IT / IS</option>
          <option value="Mech.">Mech.</option>
          <option value="Metallurgy">Metallurgy</option>
          <option value="Others">Others</option>
        </select>
        <label htmlFor="pap-interestedin">Course Interested In:</label>
        <select id="pap-interestedin">
          <option value="Embedded Systems">Embedded Systems</option>
          <option value="Internet of Things and Data science">
            Internet of Things and Data Science
          </option>
          <option value="VLSI Design and Verification">
            VLSI Design and Verification
          </option>
          <option value="Data Science">Data Science</option>
          <option value="Full Stack Web Development">
            Full Stack Web Development
          </option>
          <option value="UX/UI Design">UX/UI Design</option>
          <option value="Embedded Systems Design & Automotive">
            Embedded Systems Design & Automotive
          </option>
        </select>
        <input id="form-btn-2" type="submit" value="Submit" />
      </form>
      <hr className="horizontal-line" />
      <JoinWebinar />
    </div>
  );
}

export default CompleteProfileForm;
