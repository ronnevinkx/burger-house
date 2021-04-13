import Link from 'next/link';

export default function Layout({ children }) {
	return (
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
	);
}
