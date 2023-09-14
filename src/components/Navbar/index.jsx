export const Navbar = ({HandleToggleToast}) => {

  return (
        <nav className="navbar py-1 bg-subtle position-relative ">
            <div className="container ">
                <a href="_blank" className="mb-0 text-black px-2 rounded-2 fw-bold navbar-brand" to="/users">Main Course</a>

                <button className="p-3 btn" onClick={HandleToggleToast}>
                    Keranjang
                </button>
            </div>
        </nav>
  )
}
