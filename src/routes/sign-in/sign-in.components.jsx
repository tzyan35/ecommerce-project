import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";


const SignIn = () => {

  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup()
    const userDocRef = await createUserDocumentFromAuth(user)
  }
  return (
    <div>
      <div>
        <h2>Sign In Page</h2>
        <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      </div>
    </div>
  );
};

export default SignIn;
