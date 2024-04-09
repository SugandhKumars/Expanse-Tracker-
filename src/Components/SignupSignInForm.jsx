import React from "react";
import { Provider, auth } from "../firebase";
import { toast } from "react-toastify";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import Input from "./Input";
import Button from "./Button";

const SignupSignInForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [passward, setPassward] = useState("");
  const [Confirmpassward, setConfirmPassward] = useState("");
  const signUpWithEmailAndPassward = () => {
    if (name != "" && email != "" && passward != "" && Confirmpassward != "") {
      if (passward !== Confirmpassward)
        toast.error("Passward and Confirm Passward are not equal");
      createUserWithEmailAndPassword(auth, email, passward)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          toast.success("User Created Succesfully");
          setName("");
          setPassward("");
          setEmail("");
          setConfirmPassward("");
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          toast.error(errorMessage);
          // ..

          console.log(errorMessage);
        });
    } else {
      toast.error("All fields are mandatory!");
    }
  };
  const SignUpWithGoogle = () => {
    signInWithPopup(auth, Provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console / log(errorMessage);
        // ...
      });
  };
  return (
    <>
      <div className="w-[27%]  border-2 mx-auto shadow-lg rounded-lg mt-5 px-8 py-6 ">
        <p className="flex justify-center  text-xl font-semibold pb-5">
          Sign Up on <span className="text-blue-500 px-2"> ExpanseTracker</span>
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("Hello");
          }}
        >
          <Input
            label={"Full Name"}
            type={"text"}
            state={name}
            setState={setName}
            placeholder={"Sugandh"}
          />
          <Input
            state={email}
            setState={setEmail}
            label={"Email"}
            type={"email"}
            placeholder={"abc@gmail.com"}
          />
          <Input
            label={"Password"}
            state={passward}
            setState={setPassward}
            type={"Password"}
            placeholder={"abcde@1234"}
          />
          <Input
            state={Confirmpassward}
            setState={setConfirmPassward}
            label={"Confirm Password"}
            type={"Password"}
            placeholder={"abcde@1234"}
          />
          <Button
            type={"submit"}
            text={"Sign Up with Email and Password"}
            onClick={() => signUpWithEmailAndPassward()}
          />
          <p className="flex justify-center my-2">Or</p>
          <Button
            text={"Sign Up with Google"}
            color={true}
            onClick={() => {
              SignUpWithGoogle();
            }}
          />
        </form>
      </div>
    </>
  );
};

export default SignupSignInForm;
