import { client } from '../utils';
import RecipeCard from '../components/RecipeCard';
export const config = { amp: true };

export default function Recipes({ recipes }) {
	return (
		<div className="recipe-list">
			{recipes.map((recipe) => (
				<RecipeCard key={recipe.sys.id} recipe={recipe} />
			))}
			<style jsx>
				{`
					.recipe-list {
						display: grid;
						grid-template-columns: 1fr 1fr;
						grid-gap: 20px 60px;
					}
				`}
			</style>
		</div>
	);
}

export async function getStaticProps() {
	const { items } = await client.getEntries({ content_type: 'recipe' });

	return {
		props: {
			meta: {
				title: 'Original Texas Burger House',
				descr: 'Best burger joint in town!'
			},
			recipes: items
		},
		revalidate: 10
	};
}
