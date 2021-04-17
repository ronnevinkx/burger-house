import Link from 'next/link';

export default function RecipeCard({ recipe }) {
	const { title, slug, cookingTime, thumbnail } = recipe.fields;

	return (
		<div className="card">
			<div className="featured">
				<Link href={`/recipes/${slug}`}>
					<a>
						<amp-img
							src={`https:${thumbnail.fields.file.url}`}
							width={
								thumbnail.fields.file.details.image.width
							}
							height={
								thumbnail.fields.file.details.image.height
							}
							alt={title}
							title={title}
							layout="responsive"
						/>
					</a>
				</Link>
			</div>
			<div className="content">
				<div className="info">
					<h4>{title}</h4>
					<p>Takes approx. {cookingTime} mins. to make</p>
				</div>
				<div className="actions">
					<Link href={`/recipes/${slug}`}>
						<a>Cook this</a>
					</Link>
				</div>
			</div>
			<style jsx>{`
				.card {
					transform: rotateZ(-1deg);
				}

				.content {
					position: relative;
					top: -40px;
					left: -10px;
					margin: 0;
					box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
					background: #fff;
				}

				.info {
					padding: 16px;
				}

				.info h4 {
					margin: 4px 0;
					text-transform: uppercase;
				}

				.info p {
					margin: 0;
					color: #777;
				}

				.actions {
					display: flex;
					margin-top: 20px;
					justify-content: flex-end;
				}

				.actions a {
					color: #fff;
					padding: 16px 24px;
					text-decoration: none;
					background: #f01b29;
				}
			`}</style>
		</div>
	);
}
