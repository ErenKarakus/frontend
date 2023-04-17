import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faFileCirclePlus,
    //faFilePen,
    faUserGear,
    faUserPlus,
    faRightFromBracket,
    fa1,
    fa2
} from "@fortawesome/free-solid-svg-icons"
import { useNavigate, Link, useLocation } from 'react-router-dom'
import { useSendLogoutMutation } from '../features/auth/authApiSlice'
import useAuth from '../hooks/useAuth'
import PulseLoader from 'react-spinners/PulseLoader'

const DASH_REGEX = /^\/dash(\/)?$/
const FORM1S_REGEX = /^\/dash\/FORMS1(\/)?$/
const FORM2S_REGEX = /^\/dash\/FORMS2(\/)?$/
const USERS_REGEX = /^\/dash\/users(\/)?$/

const DashHeader = () => {
    const { isManager, isAdmin } = useAuth()

    const navigate = useNavigate()
    const { pathname } = useLocation()

    const [sendLogout, {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useSendLogoutMutation()

    useEffect(() => {
        if (isSuccess) navigate('/')
    }, [isSuccess, navigate])

    const onNewForm1Clicked = () => navigate('/dash/form1s/new')
    const onForm1sClicked = () => navigate('/dash/form1s')
    const onNewForm2Clicked = () => navigate('/dash/form2s/new')
    const onForm2sClicked = () => navigate('/dash/form2s')
    const onNewUserClicked = () => navigate('/dash/users/new')
    const onUsersClicked = () => navigate('/dash/users')

    let dashClass = null
    if (!DASH_REGEX.test(pathname) && !FORM1S_REGEX.test(pathname) && !FORM2S_REGEX.test(pathname) && !USERS_REGEX.test(pathname)) {
        dashClass = "dash-header__container--small"
    }
 
    let newForm1Button = null
    if (FORM1S_REGEX.test(pathname)) {
        newForm1Button = (
            <button
                className="icon-button"
                title="New Form 1"
                onClick={onNewForm1Clicked}
            >
                <FontAwesomeIcon icon={faFileCirclePlus} />
            </button>
        )
    }

    let newForm2Button = null
    if (FORM2S_REGEX.test(pathname)) {
        newForm2Button = (
            <button
                className="icon-button"
                title="New Form 2"
                onClick={onNewForm2Clicked}
            >
                <FontAwesomeIcon icon={faFileCirclePlus} />
            </button>
        )
    }

    let newUserButton = null
    if (USERS_REGEX.test(pathname)) {
        newUserButton = (
            <button
                className="icon-button"
                title="New User"
                onClick={onNewUserClicked}
            >
                <FontAwesomeIcon icon={faUserPlus} />
            </button>
        )
    }

    let userButton = null
    if (isManager || isAdmin) {
        if (!USERS_REGEX.test(pathname) && pathname.includes('/dash')) {
            userButton = (
                <button
                    className="icon-button"
                    title="Users"
                    onClick={onUsersClicked}
                >
                    <FontAwesomeIcon icon={faUserGear} />
                </button>
            )
        }
    }

    let form1sButton = null
    if (!FORM1S_REGEX.test(pathname) && pathname.includes('/dash')) {
        form1sButton = (
            <button
                className="icon-button"
                title="Form1s"
                onClick={onForm1sClicked}
            >
                <FontAwesomeIcon icon={fa1} />
            </button>
        )
    }

    let form2sButton = null
    if (!FORM2S_REGEX.test(pathname) && pathname.includes('/dash')) {
        form2sButton = (
            <button
                className="icon-button"
                title="Form2s"
                onClick={onForm2sClicked}
            >
                <FontAwesomeIcon icon={fa2} />
            </button>
        )
    }

    const logoutButton = (
        <button
            className="icon-button"
            title="Logout"
            onClick={sendLogout}
        >
            <FontAwesomeIcon icon={faRightFromBracket} />
        </button>
    )

    const errClass = isError ? "errmsg" : "offscreen"

    let buttonContent
    if (isLoading) {
        buttonContent = <PulseLoader color={"#FFF"} />
    } else {
        buttonContent = (
            <>  
                {newForm1Button}
                {form1sButton}
                {newForm2Button}
                {form2sButton}
                {newUserButton}
                {userButton}
                {logoutButton}
            </>
        )
    }

    const content = (
        <>
            <p className={errClass}>{error?.data?.message}</p>
            
            <header className="dash-header">
                <div className={`dash-header__container ${dashClass}`}>
                    <Link to="/dash">
                        <h1 className="dash-header__title">Self Tax Assessment Tool</h1>
                    </Link>
                    <nav className="dash-header__nav">
                        {buttonContent}
                    </nav>
                </div>
        </header>
        </>
    )

    return content
}
export default DashHeader