import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import initializeAuthentication from '../Components/Farebase/Firebase.init';

initializeAuthentication()
const UseFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({})
    const [error, setError] = useState(" ")
    const [isLoading, setIsLoading] = useState(true)
    const [name, SetName] = useState(" ");
    const [email, SetEmail] = useState(" ");
    const [password, SetPassword] = useState(" ");
    const getNewUserEmail = (event) => {
        SetEmail(event.target.value);
    };
    const getNewUserName = (event) => {
        SetName(event.target.value);
    };
    const getNewUserPassword = (event) => {
        SetPassword(event.target.value);
    };
    const handleSubmitForm = event => {
        event.preventDefault();
        setIsLoading(true);

        console.log(email, password);
        if (password.length > 6) {
            setError("password should have 6 character")
            return;
        } if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError("password must contain 2 upper case")
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                setUserName();
                emailVerification();
            })
            .catch((err) => {
                setError(err.message)
            })
            .finally(() => setIsLoading(false));
    };

    const setUserName = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        })
    }
    const emailVerification = () => {
        sendEmailVerification(auth.currentUser).then(() => {
            alert(`An Verification mail has been set to ${email}`);
        });
    }

    const signInWithEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
            }).catch((err) => {
                setError(err.message)
            })
            .finally(() => setIsLoading(false));
    }

    const signInWithGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            }).catch((err) => {
                setError(err.message)
            })
            .finally(() => setIsLoading(false));
    };

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .catch((err) => {
                setError(err.message)
            })
            .finally(() => setIsLoading(false))
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, [])

    return {
        user,
        error,
        isLoading,
        signInWithGoogle,
        logOut,
        handleSubmitForm, getNewUserName,
        getNewUserEmail, getNewUserPassword, signInWithEmail
    }
};

export default UseFirebase;