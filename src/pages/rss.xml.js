import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  const sorted = posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return rss({
    title: 'Amrit',
    description: 'Notes on building things, learning, and figuring shit out.',
    site: new URL(import.meta.env.BASE_URL, context.site),
    items: sorted.map((post) => ({
      title: post.data.title,
      description: post.data.excerpt,
      pubDate: post.data.date,
      link: `${import.meta.env.BASE_URL}writing/${post.id}/`,
    })),
  });
}
