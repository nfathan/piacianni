function Navigation() {
  return (
    <nav className="nav-menu d-none d-lg-block">
      <ul>
        <li className="active"><a href="#header">Home</a></li>
        <li><a href="#about">Tentang Kami</a></li>                        
        <li><a href="#pricing">Produk</a></li>
        {/* <li><a href="#features">Layanan</a></li> */}
        <li><a href="#testimonials">Testimoni</a></li>
        {/* <li><a href="#team">Team</a></li> */}
        {/* <li><a href="#faq">Bantuan ?</a></li> */}
        <li><a href="#contact">Hubungi Kami</a></li>
      </ul>
    </nav>
  )
}

export default Navigation 