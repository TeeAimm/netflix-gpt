import { onAuthStateChanged, signOut } from "firebase/auth";

import "./Header.scss";
import netflixLogo from "../../assets/images/Netflix_Logo_PMS.png";
import { auth } from "utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "store/userSlice";
import { useNavigate } from "react-router-dom";
import { RootState } from "store/appStore";
import { useEffect } from "react";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user: any = useSelector((store: RootState) => store.user);

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                dispatch(removeUser());
                navigate("/");
            })
            .catch((error) => {
                navigate("/error");
            });
    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid, email, displayName, photoURL }))
                navigate('/browse')
            } else {
                dispatch(removeUser())
                navigate('/')
            }
        });
    }, [])

    return user ? (
        <div className="header__body__loggedin d-flex justify-content-between align-items-center">
            <div>
                <img
                    className="header__body__loggedin__img"
                    src={netflixLogo}
                    alt="Netflix logo"
                />
            </div>
            {user && (
                <div>
                    <img
                        className="header__body__loggedin__profile__icon"
                        src={user?.photoURL}
                        alt="Profile Icon"
                    />
                    <button className="btn btn-light" onClick={handleSignOut}>
                        Sign out
                    </button>
                </div>
            )}
        </div>
    ) : (
        <div className="header__body d-flex justify-content-between align-items-center">
            <div>
                <img
                    className="header__body__img"
                    src={netflixLogo}
                    alt="Netflix logo"
                />
            </div>
        </div>
    );
};

export default Header;
