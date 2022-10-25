Mental Health Without Borders (FrontEnd)

## Table of contents
=====================

  * [General Info](#general-info)
  * [Code Snippet](#code-snippet)
  * [Technologies](#technologies)

  





## General Info

Taking the humanitarian effort to the next level by connecting refugees in need to licensed professionals

## Code Snippet
``` function handleSubmit(e){
      e.preventDefault();
      fetch("http://localhost:9292/patients", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email: email,
          phone: phone,
          username: username,
          password: password,
          id_number: idNumber
          }),
        })
      .then((r) => r.json())
      .then((newPatient) => setUser(newPatient));
        history.push('/patient-landing')
        componentDidMount()
         }

         function handleSubmitPhysician(e){
          e.preventDefault();
          fetch("http://localhost:9292/physicians", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              first_name: firstName,
              last_name: lastName,
              country: country,
              license_number: license,
              username: username,
              password: password,
              }),
            })
          .then((r) => r.json())
          .then((data) => setUser(data));
            history.push('/doc-landing')
            componentDidMount()
             }


         function handleLoginChange(e){
           setUserLogin(e.target.value)
        }

        
        function handleLoginSubmit(e){
          e.preventDefault();
          fetch(`http://localhost:9292/patients/${userLogin}`)
          .then((r) => r.json())
          .then((data) => setUser(data));
          history.push('/patient-landing')
        }
```

## Technologies
- React 



## Contact
Kenneththedev@gmail.com
