import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth0 } from "@auth0/auth0-react";
import Giris from './giris'

export default function Layout({ children }) {
    const { loginWithRedirect, user, loginWithPopup, logout, isLoading, isAuthenticated } = useAuth0();

    if (isLoading) {
      return <div>Loading ...</div>;
    }

    return (
        <div className="container pt-3">
        {isAuthenticated ? (
        <div>
          <div className="d-flex justify-content-between">
            <h2>Hoş Geldin <span className="text-success">{user.name}</span></h2>
            <button className="btn btn-danger" onClick={() => logout({ returnTo: process.env.NEXT_PUBLIC_URL })}>
              Çıkış Yap
            </button>
          </div>
          
          <div>
            {user.nickname === "haceranafaydaveririnsana" ? (
                <main>{children}</main>
                ) : (
                    <p className="text-danger text-center pt-5 mt-5 fs-1">Bu alanı görmeye yetkiniz yoktur.</p>
                  )}
                </div>
              </div>
            ) : (
              <div>
                <button className="btn btn-success float-end" onClick={() => loginWithPopup()}>Giriş Yap</button>
                <Giris />
              </div>
            )
          }
        </div>
    )
}