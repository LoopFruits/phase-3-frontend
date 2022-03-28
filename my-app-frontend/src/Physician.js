function Physician() {

    return (
        <div className="body-1">
    <h1>Physician Sign-up</h1>
    <form>
      <fieldset>
        <label>
          <p>First Name</p>
          <input firstName="firstName" />
        </label>
        <label>
          <p>Last Name</p>
          <input lastName="lastName" />
        </label>
        <label>
          <p>Country</p>
          <input country="country" />
        </label>
        <label>
          <p>Medical License</p>
          <input medicalLicense="medicalLicense" />
        </label>
      </fieldset>
      <button type="submit">Submit</button>
    </form>
  </div>
    )
    
}


export default Physician;