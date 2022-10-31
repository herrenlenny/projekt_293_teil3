import {getAllPosts} from "@lib/api";
import SearchList from "@components/SearchList";

export default function IndexPage({posts}) {
    const onlyFavoritePostPush = false

    return (
        <div>
            <SearchList posts={posts}/>
        </div>
    )
}

export async function getStaticProps() {
    const posts = await getAllPosts()
    return {
        props: {posts}
    }
}