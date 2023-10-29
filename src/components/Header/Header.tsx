import { onAuthStateChanged, signOut } from "firebase/auth";

import "./Header.scss";
import netflixLogo from "../../assets/images/Netflix_Logo_PMS.png";
import { auth } from "utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "store/userSlice";
import { useNavigate } from "react-router-dom";
import { RootState } from "store/appStore";
import { useEffect } from "react";
import { toggleGptSearchView } from "store/gptSlice";
import { SUPPORTED_LANGUAGES } from "utils/constants";
import { changeLanguage } from "store/configSlice";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user: any = useSelector((store: RootState) => store.user);

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                dispatch(removeUser());
            })
            .catch((error) => {
                navigate("/error");
            });
    };

    const handleGptSearchBtn = () => {
        dispatch(toggleGptSearchView())
    }

    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        dispatch(changeLanguage(event.target.value))
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid, email, displayName, photoURL }))
                navigate('/browse')
            } else {
                dispatch(removeUser())
                navigate('/')
            }
        });
        return () => unsubscribe()
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
                <div className="d-flex align-items-center">
                    <select onChange={handleLanguageChange} className="form-select w-auto me-3" aria-label="Select language">
                        {SUPPORTED_LANGUAGES?.map(item => <option key={item?.identifier} value={item?.identifier}>{item?.name}</option>)}
                    </select>
                    <button type="button" className="btn btn-success" onClick={handleGptSearchBtn}>Search</button>
                    <img
                        className="header__body__loggedin__profile__icon ms-3"
                        src={user?.photoURL}
                        alt="Profile Icon"
                    />
                    <button className="btn btn-link" onClick={handleSignOut}>
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
