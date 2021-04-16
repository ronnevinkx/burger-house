import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function NotFound() {
	const [location, setLocation] = useState(null);
	const [timeLeft, setTimeLeft] = useState(4);
	const router = useRouter();

	useEffect(() => {
		if (window && window.location) setLocation(window.location);

		timeLeft > 0 && setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
		setTimeout(() => router.push('/'), 4000);
	}, [timeLeft]);

	return (
		<div className="not-found">
			<h1>404 Not Found</h1>
			{location && (
				<p>
					You were looking for: <strong>{location.pathname}</strong>
				</p>
			)}
			<p>
				Redirecting to <Link href="/">homepage</Link> in {timeLeft}{' '}
				second{timeLeft !== 1 ? 's' : ''}...
			</p>
			<style jsx>
				{`
					h1 {
						font-size: 3em;
					}

					.not-found {
						padding: 30px;
						transform: rotateZ(-1deg);
						box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
						background: #ffffff;
					}
				`}
			</style>
		</div>
	);
}
