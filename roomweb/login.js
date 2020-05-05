const firebaseConfig = {
    apiKey: "AIzaSyBv8smcSq6KUFImtYKIAWWZ0PgE3FDqS3s",
    authDomain: "dev-roomlelo.firebaseapp.com",
    databaseURL: "https://dev-roomlelo.firebaseio.com",
    projectId: "dev-roomlelo",
    storageBucket: "dev-roomlelo.appspot.com",
    messagingSenderId: "450187201766",
    appId: "1:450187201766:web:808edcd60afea26be93f27"
  };

    firebase.initializeApp(firebaseConfig)
    var db = firebase.firestore()



window.onload = function(){
    LogIn(-1)
    }
    function LogIn(key){
    
        if(key==-1)
        {	
            document.getElementById('logorsin').textContent = "or, Sign Up";
            document.getElementById('logorsin').onclick = function(){
                SignUp(-1);
            }
        }
    
        document.getElementById('f-name').style.display = 'inline';
        document.getElementById('l-name').style.display = 'inline';
        document.getElementById('user_email').style.display = 'none';
        document.getElementById('m-signIn').textContent ="Sign In";
        document.getElementById('m-head').textContent = "Sign In";
        document.getElementById('f-pass').style.display = 'block';
        document.getElementById('c-pass').style.display = 'block';
        document.getElementById('terms').style.display = 'none';
        document.getElementById('pass').style.borderTop = '1px solid #ddd'
    
        document.getElementById('que').innerHTML = `
                Don't have account yet? <span id="ask" onclick="SignUp(0)" style="color:#0000ff;cursor:pointer">Create new for free!</span>
        `;
        
    
        if(key==1)
        document.getElementsByClassName('open-m')[0].click();
    
    }
    
    
    function SignUp(key){
        if(key==-1)
        {	
            document.getElementById('logorsin').textContent = "or, Sign In";
            document.getElementById('logorsin').onclick = function(){
                LogIn(-1);
            }
    
        }
        document.getElementById('pass').style.borderTop = '0px'
        document.getElementById('user_email').style.display = 'block';
        document.getElementById('f-name').style.display = 'inline';
        document.getElementById('l-name').style.display = 'inline';
        document.getElementById('c-pass').style.display = 'block';
        document.getElementById('m-signIn').textContent ="Create Account";
        document.getElementById('m-head').textContent = "Create Account";
        document.getElementById('f-pass').style.display = 'block';
        document.getElementById('c-pass').style.display = 'block';
        document.getElementById('terms').style.display = 'block';
    
        document.getElementById('que').innerHTML = `
                Already have an account? <span id="ask" onclick="LogIn(0)" style="color:#0000ff; cursor:pointer;">Sign In</span>
        `;
        if(key==1)
        document.getElementsByClassName('open-m')[0].click();
    }
    
    
    
    
    function verification(){
        console.log('hey i am verification()')
    }
    
    function registration(){
    
        let name = document.getElementById('f-name').value+document.getElementById('l-name').value;
        let phone = document.getElementById('pass').value;
        let password = document.getElementById('c-pass').value;
        let email = document.getElementById('user_email').value;
    
        var regxPhone = /^[6-9][0-9]{9}$/;
        var regexEmail = /^([1-zA-Z0-1@.\s]{1,255})$/
    
    
            if(document.getElementById('user_email').style.display == 'block'){
                    if(regxPhone.test(phone) && regexEmail.test(user_email) ){
                        db.collection('userProfile').doc(name+pass).set({
                            email:email,
                            password:password,
                            phone:phone
                        })
                    }
                    else{
                        alert('Invalid Entry')
                    }
            }
            else{
                verification();
            }
        
    
    }
    function onSignIn(googleUser) {
        var profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
      }
        function signOut() {
          var auth2 = gapi.auth2.getAuthInstance();
          auth2.signOut().then(function () {
            console.log('User signed out.');
          });
        }
      
       window.onload = function(){
                signOut();
        }