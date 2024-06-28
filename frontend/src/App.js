import Pentest from './components/pentest';

function App() {
	return (
		<div id="fullpage">
			{/* start home */}
			<div id="home" className="section">
				<div className="container">
					<div className="row">
						<div className="col-md-2" />
						<div
							className="col-md-8 wow fadeIn"
							data-wow-delay="0.9s">
							<img src="images/logo.png" alt="Logo" />

							<h2 className="rotate">Aman, Cepat, Akurat</h2>
							<p>
								Website ini menyediakan layanan untuk memeriksa
								informasi IP Address dan sub-domain tertentu.
								Selain itu, pengguna dapat menggunakan alat NMAP
								untuk melakukan pemindaian jaringan secara
								mendetail. Dengan antarmuka yang sederhana dan
								intuitif, pengguna dapat dengan mudah mengakses
								dan menganalisis informasi yang mereka butuhkan
								tentang jaringan dan perangkat yang terhubung.
							</p>
							<a
								href="#pentest"
								className="btn btn-default smoothScroll wow fadeInUp"
								data-wow-delay="1s">
								Scan Sekarang
							</a>
						</div>
						<div className="col-md-2" />
					</div>
				</div>
			</div>
			{/* end home */}

			{/* start scanner */}
			<div id="pentest" className="section">
				<div className="container">
					<div className="row">
						<div
							className="col-md-12 wow fadeInUp"
							data-wow-delay="0.6s">
							<Pentest />
						</div>
					</div>
					<div className="row"></div>
				</div>
			</div>
			{/* end scanner */}

			{/* start work */}
			<div id="work" className="section">
				<div className="container">
					<div className="row">
						<div className="col-md-12 wow bounce">
							<h2>LEBIH DARI SEKEDAR WEB APP SCANNER</h2>
						</div>
					</div>
					<div className="row">
						<div
							className="col-md-4 col-xs-11 wow fadeInUp"
							data-wow-delay="0.6s">
							<div className="media">
								<div className="media-object media-left">
									<i className="fa fa-solid fa-shield-halved" />
								</div>
								<div className="media-body">
									<h3 className="media-heading">
										DNS Lookup
									</h3>
									<p>
										DNSLookup adalah proses untuk mengetahui
										alamat IP yang terkait dengan sebuah
										domain atau situs web tertentu. Ini
										penting karena meskipun manusia
										menggunakan nama domain (seperti
										www.contoh.com) untuk mengakses situs
										web, komputer menggunakan alamat IP
										numerik untuk mengidentifikasi server
										tempat situs web tersebut berada. Dengan
										alat cek IP Address, pengguna dapat
										memasukkan nama domain dan mendapatkan
										informasi tentang alamat IP yang
										terkait, baik IPv4 maupun IPv6.
									</p>
								</div>
							</div>
						</div>
						<div
							className="col-md-4 col-xs-11 wow fadeInUp"
							data-wow-delay="0.6s">
							<div className="media">
								<div className="media-object media-left">
									<i className="fa fa-solid fa-user-secret" />
								</div>
								<div className="media-body">
									<h3 className="media-heading">
										Subdomain Checker
									</h3>
									<p>
										Cek subdomain melibatkan pencarian dan
										identifikasi subdomain-subdomain yang
										terkait dengan sebuah domain utama.
										Subdomain adalah bagian dari nama domain
										yang berada di depan domain utama,
										biasanya digunakan untuk membedakan atau
										mengelompokkan konten tertentu di bawah
										domain utama. Alat untuk memeriksa
										subdomain memungkinkan pengguna untuk
										mengetahui semua subdomain yang telah
										dibuat di bawah domain tertentu. Ini
										berguna untuk administrasi jaringan,
										keamanan informasi, dan penelitian lebih
										lanjut terkait infrastruktur situs web.
									</p>
								</div>
							</div>
						</div>
						<div
							className="col-md-4 col-xs-11 wow fadeInUp"
							data-wow-delay="0.6s">
							<div className="media">
								<div className="media-object media-left">
									<i className="fa fa-solid fa-unlock-keyhole" />
								</div>
								<div className="media-body">
									<h3 className="media-heading">
										NMAP Scanner
									</h3>
									<p>
										NMAP adalah sebuah alat pemindaian
										jaringan yang sangat populer dan kuat.
										Nama NMAP singkatan dari Network Mapper.
										Alat ini digunakan untuk memeriksa dan
										menganalisis jaringan komputer, termasuk
										perangkat yang terhubung ke dalam
										jaringan tersebut. NMAP dapat melakukan
										berbagai jenis pemindaian, termasuk
										pemindaian port, pengidentifikasian
										sistem operasi, pemetaan jaringan,
										deteksi layanan yang berjalan, dan
										analisis keamanan. NMAP sering digunakan
										oleh administrator jaringan dan ahli
										keamanan untuk memeriksa keamanan
										jaringan mereka, menemukan kerentanan,
										dan mengaudit infrastruktur jaringan
										secara menyeluruh.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* end work */}
			{/* start footer */}
			<footer>
				<div className="container">
					<div className="row">
						<div
							className="col-md-12 wow fadeIn"
							data-wow-delay="0.9s">
							<p> © 2024 Adham Roy Bhafiel </p>
							<ul className="social-icon">
								<li>
									<a href="#">
										<i className="fa-brands fa-facebook-f" />
									</a>
								</li>
								<li>
									<a href="#">
										<i className="fa-brands fa-x-twitter" />
									</a>
								</li>
								<li>
									<a href="#">
										<i className="fa-brands fa-instagram" />
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</footer>
			{/* end footer */}
		</div>
	);
}

export default App;
