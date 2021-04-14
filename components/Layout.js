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
		</>
	);
}
