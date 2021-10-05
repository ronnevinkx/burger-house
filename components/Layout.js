import Head from 'next/head';
import Link from 'next/link';

export default function Layout({
	children,
	meta = {
		title: 'Original Texas Burger House',
		descr: 'Best burger joint in town!'
	}
}) {
	const { title, descr } = meta;

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta charSet="utf-8" />
				<meta name="description" content={descr} />
				<meta name="robots" content="noindex, nofollow" />
			</Head>
			<div className="layout">
				<header>
					<Link href="/">
						<a>
							<h2>
								<span>Original Texas</span>
								<span>Burger House</span>
							</h2>
							<h2>Time to scale</h2>
						</a>
					</Link>
				</header>
				<div className="page-content">{children}</div>
				<footer>
					<p>&copy; 2021 Burger House</p>
				</footer>
			</div>
			<style jsx global>
				{`
					body {
						background: #f4e640;
						margin: 0;
						font-family: 'Roboto', Helvetica, Arial, sans-serif;
						font-size: 1.5em;
					}
					.layout {
						min-height: 100vh;
						display: flex;
						flex-direction: column;
					}
					header {
						text-align: center;
						margin: 60px 0;
					}
					header a {
						text-decoration: none;
						color: black;
						text-transform: uppercase;
						display: inline-block;
					}
					header h1,
					header h2 {
						margin: 0;
					}
					header span {
						display: block;
						line-height: 1em;
					}
					header span:first-child {
						font-size: 1em;
						font-weight: 400;
					}
					header span:last-child {
						font-size: 1.5em;
						font-weight: 900;
					}
					header h2 {
						font-size: 1.2em;
						font-weight: 400;
					}
					footer {
						background: #111;
						color: #bbb;
						padding: 40px;
						text-align: center;
						margin-top: auto;
					}
					.page-content {
						max-width: 1200px;
						margin: 20px auto 80px;
						padding: 0 20px;
						width: 100%;
						box-sizing: border-box;
					}
				`}
			</style>
		</>
	);
}
