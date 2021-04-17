import { useAmp } from 'next/amp';
import Image from 'next/image';
import { client } from '../../utils';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Skeleton from '../../components/Skeleton';
export const config = { amp: 'hybrid' };

export default function RecipeDetails({ recipe }) {
	const isAmp = useAmp();

	if (!recipe) return <Skeleton />;

	const {
		title,
		featuredImage,
		cookingTime,
		ingredients,
		method
	} = recipe.fields;

	return (
		<div>
			<div className="banner">
				{isAmp ? (
					<amp-img
						src={`https:${featuredImage.fields.file.url}`}
						width={featuredImage.fields.file.details.image.width}
						height={featuredImage.fields.file.details.image.height}
						alt={title}
						title={title}
						layout="intrinsic"
					/>
				) : (
					<Image
						src={`https:${featuredImage.fields.file.url}`}
						width={featuredImage.fields.file.details.image.width}
						height={featuredImage.fields.file.details.image.height}
						alt={title}
						title={title}
					/>
				)}
				<h1>{title}</h1>
			</div>
			<div className="info">
				<p>Takes about {cookingTime} mins to cook. </p>
				<h3>Ingredients:</h3>
				{ingredients.map((ingredient) => (
					<span key={ingredient}>{ingredient}</span>
				))}
			</div>
			<div className="method">
				<h3>Method:</h3>
				<div>{documentToReactComponents(method)}</div>
			</div>
			<style jsx>
				{`
					.banner h1 {
						position: relative;
						display: inline-block;
						top: -60px;
						left: -10px;
						margin: 0;
						padding: 20px;
						transform: rotateZ(-1deg);
						box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
						background: #fff;
					}

					h1,
					h3 {
						text-transform: uppercase;
					}

					.info p {
						margin: 0;
					}

					.info span:after {
						content: ', ';
					}

					.info span:last-child:after {
						content: '.';
					}
				`}
			</style>
		</div>
	);
}

// next will run getStaticProps for each path listed in getStaticPaths at build time
// destructure slug from context->params object
export async function getStaticProps({ params: { slug } }) {
	const { items } = await client.getEntries({
		content_type: 'recipe',
		'fields.slug': slug
	});

	if (!items.length) {
		return {
			redirect: {
				destination: '/',
				permanent: false
			}
		};
	}

	return {
		props: {
			meta: {
				title: items[0].fields.title,
				descr: ''
			},
			recipe: items[0]
		},
		revalidate: 10
	};
}

// getStaticPaths is necessary when using a dynamic route (e.g. [id].js or [id]/edit.js)
// next will prerender all listed pages at build time
// paths: return an array of objects that have a params prop, which has a slug prop
// the prop is named "slug" because we're using [slug].js
export const getStaticPaths = async () => {
	const { items } = await client.getEntries({ content_type: 'recipe' });
	const paths = items.map((item) => {
		return { params: { slug: item.fields.slug } };
	});

	// if we set fallback to 'blocking', next will wait for the page to be generated
	// via SSR, then cache it for future requests
	// if false, next serves 404 page
	// if true, next returns fallback version, fetch data in background and return when available
	return {
		paths,
		fallback: true
	};
};
